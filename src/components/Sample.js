import React, { useEffect, useRef } from 'react'

function Sample() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();
    let resultParaRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let englishResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();
    let passMarks = 35;

    let prudhviDetails = ["Prudhvi", "Reddy", 28, "Hyderabad", 88,77,66,55,44,99];
    console.log(prudhviDetails);
    console.log(prudhviDetails[2]);
    console.log(prudhviDetails[3]);

    let [prudhviFirstName,
         prudhviLastName, 
         prudhviAge, 
         prudhviState, 
         prudhviTeluguMarks, 
         prudhviHindiMarks, 
         prudhviEnglishMarks,
         prudhviMathsMarks, 
        prudhviScienceMarks,
        prudhviSocialMarks] = prudhviDetails;

        console.log(
            prudhviFirstName,
         prudhviLastName, 
         prudhviAge, 
         prudhviState, 
         prudhviTeluguMarks, 
         prudhviHindiMarks, 
         prudhviEnglishMarks,
         prudhviMathsMarks, 
        prudhviScienceMarks,
        prudhviSocialMarks
        );

    let sachinDetails = {
        firstName: "Sachin",
        lastName: "Tendulkar",
        age : "50",
        location : "Mumbai",
        awards : "Bharatratna",
        teluguMarks:91,
        hindiMarks:92,
        englishMarks:93,
        mathsMarks:94,
        scienceMarks:95,
        socialMarks:96,
        aboutSachin:()=>{
            console.log("Sachin tendulkar is only bharatratna cricketer in india.");
        },
    };
    console.log(sachinDetails);

    let {teluguMarks:sachinTeluguMarks,
         hindiMarks:sachinHindiMarks,
          englishMarks:sachinEnglishMarks,
           mathsMarks:sachinMathsMarks,
            scienceMarks:sachinScienceMarks,
             socialMarks:sachinSocialMarks} = sachinDetails;

    console.log(sachinTeluguMarks, sachinHindiMarks, sachinEnglishMarks, sachinMathsMarks, sachinScienceMarks, sachinSocialMarks);

    let viratDetails = {
        firstName: "Virat",
        lastName: "Kohli",
        age : "35",
        location : "Delhi",
        awards : "Arjuna",
        teluguMarks:81,
        hindiMarks:82,
        englishMarks:83,
        mathsMarks:84,
        scienceMarks:85,
        socialMarks:86,
        aboutVirat:()=>{
            console.log('Virat is one of the best players of Indian Cricket Team.');

        },
    };

    let calcTenResult = (studentDetails)=>{
        let passMarks = 35;
        if(
            studentDetails.teluguMarks >= passMarks && 
            studentDetails.hindiMarks >= passMarks && 
            studentDetails.englishMarks >= passMarks && 
            studentDetails.mathsMarks >= passMarks && 
            studentDetails.scienceMarks >= passMarks && 
            studentDetails.socialMarks >= passMarks 
        ){
            console.log(
                `${studentDetails.firstName} ${studentDetails.lastName} passed in Tenth`
            );
        }else{
            console.log(
                `${studentDetails.firstName} ${studentDetails.lastName} failed in Tenth`

            );
        }
    };

    calcTenResult(sachinDetails);
    calcTenResult(viratDetails);

    console.log(sachinDetails.awards);
    console.log(viratDetails.awards);
    viratDetails.aboutVirat();
    sachinDetails.aboutSachin();

    if(sachinDetails.age > viratDetails.age){
        console.log('Sachin is Senior');
    }else{
        console.log('Virat is Senior');
    };

    let calculateTenthResult =(
        teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks,passFn,failFn
    )=>{
        let passMarks = 35;

        if (teluguMarks >= passMarks && hindiMarks >= passMarks && englishMarks >= passMarks && mathsMarks >= passMarks && scienceMarks >= passMarks && socialMarks >= passMarks) {
            passFn();
        }else{
            failFn();
        }
    };

    calculateTenthResult(44, 52, 36, 40, 50, 60, ()=>{console.log('Student passed in tenth')}, ()=>{console.log('Student failed in tenth')});

    let calculateResult = () => {
        console.log("inside calculateResult");
        let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguInputRef.current.value);
                    let hindiMarks = Number(hindiInputRef.current.value);
                    let englishMarks = Number(englishInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let scienceMarks = Number(scienceInputRef.current.value);
                    let socialMarks = Number(socialInputRef.current.value);
                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

                    let result;

                    if(teluguMarks < passMarks || hindiMarks < passMarks || englishMarks < passMarks || mathsMarks < passMarks || scienceMarks < passMarks || socialMarks < passMarks){
                        result = "Failed";
                    }else{
                        result = "Passed";
                    }
                    
                    
                    alert(` ${firstName} ${lastName} Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in tenth and got total marks of ${totalMarks}`;
                    console.log(totalMarks);
    };

    

    useEffect(()=>{
    //    alert("Welcome to Our Website")
    },[]);

    let inputOnFocus = (inputRef,bgcolor="orange", textColor="white") => {
        inputRef.current.style.backgroundColor = bgcolor;
        inputRef.current.style.color = textColor;
    };
    let inputOnBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = "";
        inputRef.current.style.color = "black";
    };
    let inputOnChange = (inputRef,resultSpanRef) => {
        if(inputRef.current.value >= 0 && inputRef.current.value <= 100){
            if(inputRef.current.value >= passMarks){
                resultSpanRef.current.innerHTML = "Pass";
                resultSpanRef.current.style.backgroundColor = "green";
                resultSpanRef.current.style.color = "white";
            }else{
                resultSpanRef.current.innerHTML = "Fail";
                resultSpanRef.current.style.backgroundColor = "red";
                resultSpanRef.current.style.color = "white";
            }

           }else{
            resultSpanRef.current.innerHTML = "Invalid";
            resultSpanRef.current.style.backgroundColor = "black";
            resultSpanRef.current.style.color = "white";
           }
    };
  return (
    <div>
 <form className="markssheet">
            <div>
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}
                onFocus={()=>{
                    inputOnFocus(firstNameInputRef,"violet");
                }} 
                onChange={()=>{
                    console.log("FirstName-onChange");
                }} 
                onBlur={()=>{
                    inputOnBlur(firstNameInputRef);
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}
                onFocus={()=>{
                    inputOnFocus(lastNameInputRef,"indigo");
                }} 
                onChange={()=>{
                    console.log("LastName-onChange");
                }} 
                onBlur={()=>{
                   inputOnBlur(lastNameInputRef);
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={teluguInputRef}
                onFocus={()=>{
                    inputOnFocus(teluguInputRef,"blue");
                }} 
                onChange={()=>{
                   inputOnChange(teluguInputRef,teluguResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(teluguInputRef);
                }}></input>
                <span ref={teluguResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hindiInputRef}
                onFocus={()=>{
                    inputOnFocus(hindiInputRef,"green");
                }} 
                onChange={()=>{
                    inputOnChange(hindiInputRef,hindiResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(hindiInputRef);
                }}></input>
                <span ref={hindiResultRef}></span>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={englishInputRef}
                onFocus={()=>{
                    inputOnFocus(englishInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(englishInputRef,englishResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(englishInputRef);
                }}></input>
                <span ref={englishResultRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type="number" ref={mathsInputRef}
                onFocus={()=>{
                   inputOnFocus(mathsInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(mathsInputRef,mathsResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(mathsInputRef);
                }}></input>
                <span ref={mathsResultRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={scienceInputRef}
                onFocus={()=>{
                   inputOnFocus(scienceInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(scienceInputRef,scienceResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(scienceInputRef);
                }}></input>
                <span ref={scienceResultRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socialInputRef}
                onFocus={()=>{
                   inputOnFocus(socialInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(socialInputRef,socialResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(socialInputRef);
                }}></input>
                <span ref={socialResultRef}></span>
            </div>
            <div>
                <button type="button" 
                onClick={()=>{
                    calculateResult();
                }}>Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default Sample