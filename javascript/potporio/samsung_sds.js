                /*header*/    
                   
                    function top_on(){
                      i=document.querySelector('#header_top');
                      ia=document.getElementsByClassName('top1');
                      i.style.backgroundColor='#ffffff';
                      ia[0].style.color='#000000';
                      ia[1].style.color='#000000';
                      ia[2].style.color='#000000';
                      ia[3].style.color='#000000';
                      ia[4].style.color='#000000';
                      ia[5].style.color='#000000';
                      ia[6].style.color='#000000';
                      ia[7].style.color='#000000';
                      ia[8].style.color='#000000';
                      ia[9].style.color='#000000';
                      ia[10].style.filter='brightness(0%)';
                      ia[11].style.filter='brightness(0%)';
                      ia[12].style.backgroundColor='#000000'
                      ia[13].style.backgroundColor='#000000'
                      ia[14].style.backgroundColor='#000000'
                    }
                    function top_out(){
                        i=document.querySelector('#header_top');
                        ia=document.getElementsByClassName('top1');
                        i.style.backgroundColor='';
                        ia[0].style.color='#FFFFFF';
                        ia[1].style.color='#FFFFFF';
                        ia[2].style.color='#FFFFFF';
                        ia[3].style.color='#FFFFFF';
                        ia[4].style.color='#FFFFFF';
                        ia[5].style.color='#FFFFFF';
                        ia[6].style.color='#FFFFFF';
                        ia[7].style.color='#FFFFFF';
                        ia[8].style.color='#FFFFFF';
                        ia[9].style.color='#FFFFFF';
                        ia[10].style.filter='brightness(100%)';
                        ia[11].style.filter='brightness(100%)';
                        ia[12].style.backgroundColor='#ffffff'
                        ia[13].style.backgroundColor='#ffffff'
                        ia[14].style.backgroundColor='#ffffff'
                      }


                    function hidden_on() {
                        ha = document.querySelector('#hidden_bar_box');
                        ha.setAttribute('class', '');
                    }
                    function hidden_out() {
                        ha = document.querySelector('#hidden_bar_box');
                        ha.setAttribute('class', 'none');
                    }

                    function hidden_on2() {
                        hb = document.querySelector('#hidden_bar_box2');
                        hb.setAttribute('class', '');
                    }
                    function hidden_out2() {
                        hb = document.querySelector('#hidden_bar_box2');
                        hb.setAttribute('class', 'none');
                    }

                    function hidden_on3() {
                        hc = document.querySelector('#hidden_bar_box3');
                        hc.setAttribute('class', '');
                    }
                    function hidden_out3() {
                        hc = document.querySelector('#hidden_bar_box3');
                        hc.setAttribute('class', 'none');
                    }
                    function hidden_on4() {
                        hd = document.querySelector('#hidden_bar_box4');
                        hd.setAttribute('class', '');
                    }
                    function hidden_out4() {
                        hd = document.querySelector('#hidden_bar_box4');
                        hd.setAttribute('class', 'none');
                    }
                    function hidden_on5() {
                        he = document.querySelector('#hidden_bar_box5');
                        he.setAttribute('class', '');
                    }
                    function hidden_out5() {
                        he = document.querySelector('#hidden_bar_box5');
                        he.setAttribute('class', 'none');
                    }
                    function hidden_on6() {
                        hf = document.querySelector('#hidden_bar_box6');
                        if(hf.className=='none'){
                           hf.setAttribute('class', '');
                        }else{
                            hf.setAttribute('class', 'none');
                        }
                    }

                    function hidden_on7() {
                        hg = document.querySelector('#hidden_bar_box7');
                        if(hg.className=='none'){
                           hg.setAttribute('class', '');
                        }else{
                            hg.setAttribute('class', 'none');
                        }
                    }



                header_chage()
                var ea = 0;
                var roll = null;
                function header_chage(n) {
                    head = document.querySelectorAll('#header>img');
                    text = document.querySelectorAll('.header_text');
                    if (ea == text.length) {
                         ea = 0; 
                    }
                    if(n !=undefined){
                         ea=n; 
                    }
                    for (e = 0; e < text.length; e++) {
                        if (ea == e) {
                            head.item(e).setAttribute('class', 'main_img')
                            text.item(e).setAttribute('class', 'header_text')
                        } else {
                            head.item(e).setAttribute('class', 'none')
                            text.item(e).setAttribute('class', 'header_text none')
                        }
                    }
                    ea++
                }

                function main_bnt(n){
                    clearInterval(roll);
                    header_chage(n)
                    roll=setInterval(header_chage, 8000);
                }
               roll=setInterval(header_chage, 8000)

          /*header*/  

        /*contaniner two*/ 
          var da = 0;
          function second() {
              two_box = document.querySelector('.dt_box');
              if (da == 6) { da = 0; }
              if (da == 0) {
                  two_box.setAttribute('id', 'two_one')
              } else if (da == 1) {
                  two_box.setAttribute('id', 'two_two')
              } else if (da == 2) {
                  two_box.setAttribute('id', 'two_three')
              } else if (da == 3) {
                  two_box.setAttribute('id', 'two_four')
              } else if (da == 4) {
                  two_box.setAttribute('id', 'two_five')
              } else if (da == 5) {
                  two_box.setAttribute('id', 'two_six')
              } else if (da == 6) {
                  two_box.setAttribute('id', 'two_seven')
              } else if (da == 7) {
                  two_box.setAttribute('id', 'two_eight')
              }
              da++
          }

          function second2() {
              da -= 1;
              two_box = document.querySelector('.dt_box');
              if (da == -1) { da = 5; }
              if (da == 0) {
                  two_box.setAttribute('id', 'two_one2')
              } else if (da == 1) {
                  two_box.setAttribute('id', 'two_two2')
              } else if (da == 2) {
                  two_box.setAttribute('id', 'two_three2')
              } else if (da == 3) {
                  two_box.setAttribute('id', 'two_four2')
              } else if (da == 4) {
                  two_box.setAttribute('id', 'two_five2')
              } else if (da == 5) {
                  two_box.setAttribute('id', 'two_six2')
              } else if (da == 6) {
                  two_box.setAttribute('id', 'two_seven2')
              } else if (da == 7) {
                  two_box.setAttribute('id', 'two_eight2')
              }
          }

          function con_two(Num) {
              two = document.getElementsByClassName('dt_box');
              if (Num == 0) {
                  two[0].setAttribute('class', 'dt_box');
                  two[1].setAttribute('class', 'dt_box none');
              } else {
                  two[0].setAttribute('class', 'dt_box none ');
                  two[1].setAttribute('class', 'dt_box');
              }
          }
        /*contaniner two*/ 

       /*contaniner three*/ 

                let bb = 0;
                function three_event(type) {
                    three = document.querySelectorAll('.con_three_box>img');
                    three_text = document.querySelectorAll('.con_three_text');
                    if (type == 0) { bb = bb - 1; }
                    if (bb == -1) { bb = 2; }
                    for (b = 0; b < three.length; b++) {
                        if (bb == three.length) {
                            bb = 0;
                        } if (b == bb) {
                            three.item(b).setAttribute('class', '');
                            three_text.item(b).setAttribute('class', 'con_three_text');
                        } else {
                            three.item(b).setAttribute('class', 'none');
                            three_text.item(b).setAttribute('class', 'con_three_text none');
                        }
                    }
                    bb++;
                }

         /*contaniner three*/ 

        /*contaniner four*/ 
         var ca = 0;
         function con_four() {
             four_box = document.querySelector('#con_four_box');
             if (ca == 8) { ca = 0; }
             if (ca == 0) {
                 four_box.setAttribute('class', 'first')
             } else if (ca == 1) {
                 four_box.setAttribute('class', 'second')
             } else if (ca == 2) {
                 four_box.setAttribute('class', 'third')
             } else if (ca == 3) {
                 four_box.setAttribute('class', 'fourth')
             } else if (ca == 4) {
                 four_box.setAttribute('class', 'five')
             } else if (ca == 5) {
                 four_box.setAttribute('class', 'six')
             } else if (ca == 6) {
                 four_box.setAttribute('class', 'seven')
             } else if (ca == 7) {
                 four_box.setAttribute('class', 'eight')
             }
             ca++
         }

         function con_four2() {
             ca -= 1;
             four_box = document.querySelector('#con_four_box');
             if (ca == -1) { ca = 7; }
             if (ca == 0) {
                 four_box.setAttribute('class', 'first2')
             } else if (ca == 1) {
                 four_box.setAttribute('class', 'second2')
             } else if (ca == 2) {
                 four_box.setAttribute('class', 'third2')
             } else if (ca == 3) {
                 four_box.setAttribute('class', 'fourth2')
             } else if (ca == 4) {
                 four_box.setAttribute('class', 'five2')
             } else if (ca == 5) {
                 four_box.setAttribute('class', 'six2')
             } else if (ca == 6) {
                 four_box.setAttribute('class', 'seven2')
             } else if (ca == 7) {
                 four_box.setAttribute('class', 'eight2')
             }
         }
  /*contaniner four*/ 


function quick_move(){
    let n= document.querySelector('#quick');
         n.setAttribute('class','quick_on');
}
function quick_move2(){
    let n= document.querySelector('#quick');
         n.setAttribute('class','quick_out');
}


window.addEventListener('scroll',top_qq);

function top_qq(e){
    let q = document.querySelector('#header_top');
    q.style.top =window.scrollY+"px";
    top_on()
}

window.addEventListener('scroll',quick);

function quick(e){
    let b = document.querySelector('#quick');
    b.style.top = 1100+window.scrollY+"px";
}



function hidden_8(){
    j=document.querySelector('#hidden_bar_box8');
    if(j.className=='none'){
        j.setAttribute('class','hidden8_on')
    }else if(j.className=='hidden8_on'){
            j.setAttribute('class','hidden8_out')
        }else if(j.className=='hidden8_out'){
                j.setAttribute('class','hidden8_on')
            }
        console.log(j.className);
    }