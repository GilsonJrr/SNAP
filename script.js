let ham = document.getElementById('ham')
let menu = document.getElementById('menuDiv')
let menubg = document.getElementById('menuBg')
let features = document.getElementById('features')
let company = document.getElementById('company')
let arrow = document.getElementById('arrow')
let arrow2 = document.getElementById('arrow2')

function handleMenu(p){
    let width = window.innerWidth;
    // alert(width)
    if(p == 1){
        menu.style.display = 'block';
        menubg.style.width = '100%'
    }else if(p == 2){
        if(features.style.display === 'none'){
            if(width < 600){
                //mobile
                features.style.display = 'block';
            }else{
                //desktop
                features.style.display = 'flex';
                features.style.position = 'absolute';
            }
            arrow.src = './IMG/icon-arrow-up.svg'
        }else{
            features.style.display = 'none';
            arrow.src = './IMG/icon-arrow-down.svg'
        }
    }else if(p == 3){
        if(company.style.display === 'none'){
            if(width < 600){
                //mobile
                company.style.display = 'block';
            }else{
                //desktop
                company.style.display = 'flex';
                company.style.position = 'absolute';
            }
            arrow2.src = './IMG/icon-arrow-up.svg'
        }else{
            company.style.display = 'none';
            arrow2.src = './IMG/icon-arrow-down.svg'
        }
    }else{
        menu.style.display = 'none';
        menubg.style.width = '0%'

        features.style.display = 'none';
        arrow.src = './IMG/icon-arrow-down.svg'

        company.style.display = 'none';
        company.style.position = 'none'
        arrow2.src = './IMG/icon-arrow-down.svg'
    }
}