const loginFun = () =>{

    document.getElementById('btn-login').addEventListener("click", function(){
        const studentId =  document.getElementById('StudentId-field').value;
        const studentPassword =  document.getElementById('studentPassword-field').value;
        console.log(studentId,studentPassword);

        if(studentId === '243014' && studentPassword === 'ulab-student'){
            window.location.href = './home.html';
            
        } else{
           console.log('error');
        }
    })
} 
loginFun();