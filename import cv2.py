import cv2
import math as m
import mediapipe as mp

def findDistance(x1, y1, x2, y2):
    dist = m.sqrt((x2-x2)**2 + (y2-y1)**2)
    return dist

# calculate angle

def findAngle(x1,y1,x2,y2):
    theta = m.acos( (y2-y1)*(-y1)/(m.sqrt((x2-x1)**2 + (y2-y1)**2)*y1))
    degree = int(180/m.pi)*theta
    return degree


font = cv2.FONT_HERSHEY_SIMPLEX

# Colors.
blue = (255, 127, 0)
red = (50, 50, 255)
green = (127, 255, 0)
dark_blue = (127, 20, 0)
light_green = (127, 233, 100)
yellow = (0, 255, 255)
pink = (255, 0, 255)

#initialize mdeiapipe pose class

mp_pose = mp.solutions.pose
pose = mp_pose.Pose()


cap = cv2.VideoCapture(0)

#Meta
fps = int(cap.get(cv2.CAP_PROP_FPS))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
frame_size = (width,height)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')

#Video Writer

video_output = cv2.VideoWriter('output.mp4',fourcc, fps, frame_size)

if not cap.isOpened():
    print("Error : Could not open the camera")
    exit()


#body posture detection main loop

print("processing")

#capture frames
while(cap.isOpened()):
    #capture Frames
    success, image = cap.read()
    if not success:
        print("Null.Frames")
        break

    #GET FPS

    fps = cap.get(cv2.CAP_PROP_FPS)

    #GET HEIGHT AND WIDTH OF THE FRAME

    h,w = image.shape[:2]

    #CONVERT THE BGR IMAGE TO RGB

    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    #PROCESS THE IMAGE

    keypoints = pose.process(image)

    #CONVERT THE IMAGE BACK TO BGR

    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    #Use lm and lmPose as representative of the following methods.

    lm = keypoints.pose_landmarks
    lmPose = mp_pose.PoseLandmark

    l_shldr_x = int(lm.landmark[lmPose.LEFT_SHOULDER].x * w)
    l_shldr_y = int(lm.landmark[lmPose.LEFT_SHOULDER].y * h)

    r_shldr_x = int(lm.landmark[lmPose.RIGHT_SHOULDER].x * w)
    r_shldr_y = int(lm.landmark[lmPose.RIGHT_SHOULDER].y * h)

    l_ear_x = int(lm.landmark[lmPose.LEFT_EAR].x * w)
    l_ear_y = int(lm.landmark[lmPose.LEFT_EAR].y * w)

    l_hip_x = int(lm.landmark[lmPose.LEFT_HIP].x * w)
    l_hip_y = int(lm.landmark[lmPose.LEFT_HIP].y * h)


    # Aligning the camera

    # calculate distance between left shuolder and right shoulder points
    offset = findDistance(l_shldr_x, l_shldr_y, r_shldr_x, r_shldr_y)

    #Assist to align the camera to point at the side view of the person
    # Offset threshold 30 is based on results obtained from analysis over 100 samples

    if offset < 100:
        cv2.putText(image, str(int(offset))+' Aligned', (w - 150,30), font, 0.9,green,2 )
    else:
        cv2.putText(image, str(int(offset))+' Not Aligned', (w - 150,30), font, 0.9,red,2 )    

    #Calculate Body Posture inclination and Draw Landmarks

    #caluclate angles

    neck_inclination = findAngle(l_shldr_x, l_shldr_y,l_ear_x,l_ear_y)
    torso_inclination = findAngle(l_hip_x, l_hip_y, l_shldr_x,l_shldr_y)

    #Draw landmarks

    cv2.circle(image, (l_shldr_x, l_shldr_y), 7, yellow, -1)
    cv2.circle(image, (l_ear_x, l_ear_y), 7, yellow, -1)

    cv2.circle(image, (l_shldr_x, l_shldr_y -100), 7, yellow, -1)
    cv2.circle(image, (r_shldr_x, r_shldr_y),7,pink,-1)
    cv2.circle(image, (l_hip_x,l_hip_y),7,yellow,-1)

    cv2.circle(image, (l_hip_x,l_hip_y - 100), 7, yellow, -1)

    angle_text_string = "Neck : " + str(int(neck_inclination)) + ' Torso : ' + str(int(torso_inclination))


    #Determine whether good posture or bad posture
    # The threshold angles have been set based on intuition

    if neck_inclination < 40 and torso_inclination < 10:
        
        cv2.putText(image, angle_text_string, (10,30),font, 0.9,light_green, 2)
        cv2.putText(image, str(int(neck_inclination)),(l_shldr_x+10,l_shldr_y), font, 0.9, light_green, 2)
        cv2.putText(image, str(int(torso_inclination)),(l_hip_x+10,l_hip_y), font, 0.9, light_green, 2)

        # Join landmarks

        cv2.line(image, (l_shldr_x, l_shldr_y),(l_ear_x, l_ear_y),green,4)
        cv2.line(image, (l_shldr_x,l_shldr_y),(l_shldr_x,l_shldr_y -100),green, 4)
        cv2.line(image, (l_hip_x, l_hip_y),(l_shldr_x,l_shldr_y), green, 4)
        cv2.line(image, (l_hip_x,l_hip_y),(l_hip_x,l_hip_y-100),green,4)

    else:
        
        cv2.putText(image, angle_text_string, (10,30), font, 0.9, red, 2)
        cv2.putText(image,str(int(neck_inclination)),(l_shldr_x+10,l_shldr_y),font,0.9,red,2)
        cv2.putText(image, str(int(torso_inclination)), (l_hip_x + 10, l_hip_y), font, 0.9, red, 2)

        #Join landmarks

        cv2.line(image,(l_shldr_x,l_shldr_y), (l_ear_x, l_ear_y),red,4)
        cv2.line(image,(l_shldr_x, l_shldr_y), (l_shldr_x, l_shldr_y-100),red,4)
        cv2.line(image,(l_hip_x,l_hip_y),(l_shldr_x,l_shldr_y),red,4)
        cv2.line(image,(l_hip_x,l_hip_y),(l_shldr_x,l_shldr_y-100),red,4)


    #Write Frames
    cv2.imshow("image",image)
    if cv2.waitKey(10) == 13:
        break
    video_output.write(image)

print("finished")
cv2.destroyAllWindows()
cap.release()
video_output.release()
