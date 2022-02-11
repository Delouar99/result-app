
const student_form = document.getElementById('student_form');
const datalist = document.getElementById('data_list');

student_form.addEventListener('submit', function(e){
    e.preventDefault();

let name = student_form.querySelector("input[placeholder='Your Name']");
let roll = student_form.querySelector("input[placeholder = 'Rool Number']");
let student_class = student_form.querySelector("input[placeholder = 'Class']");
let photo = student_form.querySelector("input[placeholder = 'photo']");
// let gender = student_form.querySelector("input[tyfe = 'radio']:checked");
let bn = student_form.querySelector("input[placeholder = 'Bangla']");
let eng = student_form.querySelector("input[placeholder = 'English']");
let math = student_form.querySelector("input[placeholder = 'Math']");
let science = student_form.querySelector("input[placeholder = 'Science']");
let ss = student_form.querySelector("input[placeholder = 'social science']");
let religion = student_form.querySelector("input[placeholder = 'Religion']");

       
    if(name.value == '' || roll.value == ''){
            alert('all feild are requerd');
    }else{

        let storate_data = [];
        if(dataGet('result_apps')){
            storate_data =dataGet('result_apps');
        }

        storate_data.push({
                name : name.value,
                roll : roll.value,
                class : student_class.value,
                 photo : photo.value,
                //  gender : gender.value,
                ban : bn.value,
                eng : eng.value,
                math : math.value,
                s : science.value,
                ss : ss.value,
                rel : religion.value,


        });

        dataSend('result_apps', storate_data )


        
 student_form.querySelector("input[placeholder='Your Name']").value = '';
 student_form.querySelector("input[placeholder = 'Rool Number']").value = '';
 student_form.querySelector("input[placeholder = 'Class']").value = '';
student_form.querySelector("input[placeholder = 'photo']").value = '';
//  student_form.querySelector("input[tyfe = 'radio']:checked").removeAttribute('checked');
 student_form.querySelector("input[placeholder = 'Bangla']").value = '';
 student_form.querySelector("input[placeholder = 'English']").value = '';
student_form.querySelector("input[placeholder = 'Math']").value = '';
student_form.querySelector("input[placeholder = 'Science']").value = '';
student_form.querySelector("input[placeholder = 'social science']").value = '';
 student_form.querySelector("input[placeholder = 'Religion']").value = '';


 allStudentData();

    };



});

allStudentData();

function allStudentData(){
    let all_data = dataGet('result_apps');
    let data = '';
    all_data.map((student , index) =>{

        data +=`
                    <tr>
                                            <td>${index + 1}</td>
                                            <td>${student.name}</td>
                                            <td>${student.roll}</td>
                                            <td>${student.class}</td>
                                            <td>Male</td>
                                            <td>A</td>
                                            <td>4.5</td>
                                            <td><img style = "width: 50px; height: 50px ; object-fit: cover; " src="${student.photo}" alt=""></td>
                                            <td>
                                                <button class="btn btn-primary btn-sm">view</button>
                                                <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">
                                                    delete</button>
                                            </td>
                                        </tr>
        
        `;
     
    });
    datalist.innerHTML= data;
    
}

// delete student data 


function deleteStudent(id){
    let storate_data =dataGet('result_apps')
    storate_data.splice(id, 1)

    dataSend( 'result_apps' ,storate_data )
    allStudentData();
}