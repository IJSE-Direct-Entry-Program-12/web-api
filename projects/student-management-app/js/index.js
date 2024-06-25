const API_URL = 'http://localhost:3000/students'

loadAllStudents();

$("#tbl-student > tbody").on('click', 'td:last-child > i',
    async (e) => {
        const studentId = ($(e.target).parents("tr").children().first().text());
        try {
            await $.ajax(`${API_URL}/${studentId}`, {method: 'DELETE'});
            $(e.target).parents("tr").fadeOut(300, ()=>{
                $(e.target).parents("tr").remove();
                if (!$("#tbl-student > tbody > tr").length) $("#tbl-student > tfoot").show();
            });
        } catch (e) {
            alert("Failed to delete the student, try again");
            console.error(e);
        }
    });

async function loadAllStudents() {
    const studentList = await $.ajax(API_URL);
    if (studentList.length) {
        $("#tbl-student > tfoot").hide();
        studentList.forEach(student => {
            const rowHtml = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.contact}</td>
                    <td><i class="bi bi-trash3"></i></td>
                </tr>
           `;
            $("#tbl-student > tbody").append(rowHtml);
        });
    } else {
        $("#tbl-student > tfoot").show();
    }
}

$("#btn-new-student").on('click', ()=>{
    $("form").trigger('reset');
    $("#txt-id").val(generateNewId());
    $("#txt-name").trigger('focus');
});

$("form").on('submit', (e)=>{
    e.preventDefault();
    $("form").addClass('was-validated');
    if (document.querySelector("form").checkValidity()){
        saveStudent();
    }
}).on('reset', ()=>{
   $("form").removeClass("was-validated");
});

async function saveStudent(){
    try {
        const newStudent = {
            id: $("#txt-id").val().trim(),
            name: $("#txt-name").val().trim(),
            contact: $("#txt-contact").val().trim(),
        }
        await $.ajax(API_URL, {
            method: 'POST',
            data: JSON.stringify(newStudent),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const rowHtml = `
                <tr>
                    <td>${newStudent.id}</td>
                    <td>${newStudent.name}</td>
                    <td>${newStudent.contact}</td>
                    <td><i class="bi bi-trash3"></i></td>
                </tr>
           `;
        $("#tbl-student > tbody").append(rowHtml);
        $("#tbl-student > tfoot").hide();
        $("form").trigger('reset');
    }catch (e){
        alert("Failed to save the student, try again");
        console.error(e);
    }
}

function generateNewId(){
    const lastStudentId = $("#tbl-student > tbody > tr:last-child > td:first-child").text();
    const newId = +lastStudentId.replace('S', '') + 1;
    return "S" + `${newId}`.padStart(3, '0');
}