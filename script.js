// handleSentinel = (c) => { 
  
//     if(!this.observer) {
//       // создаём observer
//         this.observer = new IntersectionObserver(
//             entries => {
//             entries.forEach(e => { 
//                 // если анкор стригерен, рендерим следующую секцию
//                 if (e.isIntersecting) {
//                 this.setState(
//                     { cursor: +e.target.getAttribute('index') }
//                 );
//                 }
//             });
//             },
//             {
//             root: document.querySelector('App'),
//             rootMargin: '-30px',
//             } 
//         ) 
        
//     }; 
//     if (!c) return; 
//     // наблюдаем за анкором
//     this.observer.observe(c)
//   }
//   render() {
//     const blockNum = 5;
//   }
//   https://www.pvsm.ru/javascript/320838