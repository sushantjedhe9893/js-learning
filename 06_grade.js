function gradeCalculation(marks){



    // invalid inputs
    if (marks==null || marks<=0 || isNaN(+marks) || marks>100) {
        console.log(`Invalid input: ${marks} Please provide the valid marks`);
    } else 
    {
        if (marks>=90) 
        console.log(`Fantastic marks : ${marks},You are grade is "A+"`);
    }
    {
        if (marks>=75 && marks<90) {
            console.log(`Excellent Marks: ${marks}, Your grade is "A"`);
        }
        if (marks>=50 && marks<75) {
            console.log(`Good Marks: ${marks}, Your grade is "B"`);
        }
        if (marks>=35 && marks<50) {
            console.log(`Marks is: ${marks}, Your grade is "C" Need Improvement`);
        }
    }
        
    }
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);