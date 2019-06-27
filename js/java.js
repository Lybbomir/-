window.addEventListener('DOMContentLoaded', function() {   // назнач обраб соб на всю стр
	'use strict'; // строгий режим
	let tab = document.querySelectorAll('.info-header-tab'),  //табы родителя
	    info = document.querySelector('.info-header'),     // родитель 
		tabContent = document.querySelectorAll('.info-tabcontent');   //тайтл описание кнопка
		
		// две функ проивополож по действию
		function hideTabContent(a) {           //скрывает контент
		 for (let i = a; i < tabContent.length; i++) {
			 tabContent[i].classList.remove('show');  //
			 tabContent[i].classList.add('hide');   //элем tabcontent скроются со стр
		 }
		}
		hideTabContent(1); //скрыв все табы кроме первого и далее ++
		
		function showTabContent(b) {  //покажет таб который необходим
			if (tabContent[b].classList.contains('hide')) {  //покажет контент вкладки
		     tabContent[b].classList.remove('hide');  // вверху скрывает внизу показ опред
			 tabContent[b].classList.add('show');
			}	
		}
		info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}

		
		
		});
		
});
console.log('привет хуететет');