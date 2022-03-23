

function checkText(){
    var talk=document.querySelector(".inputIcon").value;
    var answer = document.getElementsByClassName("conversation");
    const screen = document.getElementById("screen");
    const pic = document.getElementById("hostImg");


    if(talk==""){
        alert("텍스트를 입력해주세요.");
    }

    else if(talk.includes("안녕") == true){
        answer[0].innerHTML="안녕! 만나서 반가워.";
    }

    else if(talk.includes("뭐 해?") == true||talk.includes("뭐 하고 있어?") == true||talk.includes("뭐 하는 중이야?") == true){
        answer[0].innerHTML="나 지금 연습하고 있지~";
    }

    else if(talk.includes("먹었어?") == true||talk.includes("밥은?") == true||talk.includes("뭐 먹었어?") == true){
        answer[0].innerHTML="방금 피자 먹고 왔어!";
    }

    else if(talk.includes("수고했어") == true||talk.includes("고생많았어") == true){
        answer[0].innerHTML="너도 오늘 하루 수고했어~💌";
    }

    else if(talk.includes("잘자") == true){
        answer[0].innerHTML="응응 우리 꿈에서 또 보자 !";
    }

    else if(talk.includes("불꺼줘") == true){
        screen.style.backgroundColor = 'rgba(0, 0, 0, 0.589)';
    }

    else if(talk.includes("불켜줘") == true){
        screen.style.backgroundColor = '';
    }

    else if(talk.includes("토끼") == true){
        pic.src="./images/rabbit.gif";
        pic.height=225;

        setTimeout(function original(){
            pic.src="./images/hwa_profile.png";
            pic.height=200;
        }, 3000);
    }

    else if(talk.includes("브이") == true || talk.includes("볼콕") == true){
        pic.src="./images/v.gif";
        pic.height=296;

        setTimeout(function original(){
            pic.src="./images/hwa_profile.png";
            pic.height=200;
        }, 3000);
    }

    else{
        answer[0].innerHTML="뭐라고? 이해를 못했어. 다시 한 번 말해줄래?";
    }

}