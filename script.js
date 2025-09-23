 let menuList = document.getElementById('menuList');
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == '0px'){
                menuList.style.maxHeight = '300px';
            }
            else{
                menuList.style.maxHeight = '0px';
            }
        }




        const projects = [

            {
                name : 'Random quote generator',
                url : 'https://venkatesh-khatake.github.io/quote-generator/',
                image : 'quoteGenerator.png',
            },
             {
                name : 'Watch landing page',
                url : 'https://venkatesh-khatake.github.io/Landing-Page/',
                image : 'watch.png',
            },
             {
                name : 'Gradient Generator',
                url : 'https://venkatesh-khatake.github.io/Gradient-Generator/',
                image : 'grediant.png',
            },
             {
                name : 'Myntra UI',
                url : 'https://venkatesh-khatake.github.io/Myntra-inspired-UI--Educational-Purpose-/',
                image : 'myntra.png',
            },{
                name : 'Todo App',
                url : 'https://venkatesh-khatake.github.io/todo-app/',
                image : 'todo.png',
            },{
                name : 'Weather App',
                url : 'https://venkatesh-khatake.github.io/WeatherApp/',
                image : 'weather.png',
            },
            {
                name : 'Age Calculator',
                url : 'https://venkatesh-khatake.github.io/Age-Calculator/',
                image : 'ageCalc.png',
            },
               {
                name : 'Desert Website',
                url : 'https://venkatesh-khatake.github.io/Desert_Website/',
                image : 'desert.png',
            }
        ];

        const myProjects = document.getElementById('projects'); 

         myProjects.innerHTML = 
        projects.map((project) =>{
           return  `
            
             <div class="project-box" data-aos="fade-up" data-aos-delay="200">
                <img src= ${project.image} alt="">
                <h5 class="name">${project.name}</h5>
                <button><a href = ${project.url}>visit</a></button>
              </div>


            
            `;
             
        }).join("")