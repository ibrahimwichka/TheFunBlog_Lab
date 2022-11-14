let addbutton = document.getElementById("button")

    let box = document.getElementById("username")

    let welcome = document.getElementById("welcome")

    let post_que = document.getElementById("post-que")

    let post_button1 = document.getElementById("post-button1")

    let comment_bar  = document.getElementById(("comment-bar"))

    addbutton.addEventListener('click', function(){
        let username = box.value
        let p1 = document.createElement("p")
        p1.innerText = "Welcome " + username + "!"
        welcome.append(p1)
    })

    post_button1.addEventListener('click', function(){
        let space = document.createElement("br")
        let space2 = document.createElement("br")
        let box1 = document.createElement("input")
        box1.id = "input2"
        box1.size = "50"
        post_que.append(space)
        post_que.append(space2)
        post_que.append(box1)
        let space3 = document.createElement("br")
        let button3 = document.createElement("button")
        button3.id = "button-3"
        button3.innerHTML = "Post"
        post_que.append(space3)
        post_que.append(button3)

        button3.addEventListener('click', function(){
            let stuff = box1.value
            let post_material = document.createElement("p")
            post_material.id = "post_mat"
            let username1 = box.value
            username1.id = username1
            post_material.innerText = username1 + "\n" + stuff
            post_que.append(post_material)
            box1.style.display = "none"
            button3.style.display = "none"
            let button4 = document.createElement("button")
            button4.id = "button-4"
            button4.innerHTML = "Comment"
            post_que.append(button4)

        
            button4.addEventListener('click', function(){
                let input4 = document.createElement("input")
                input4.id = "input4"
                input4.size = 25
                comment_bar.append(input4)
                let button5 = document.createElement("button")
                button5.id = button-5
                button5.innerHTML = "Submit"
                comment_bar.append(button5)
                
                
                button5.addEventListener('click', function(){
                    let comment = input4.value
                    let comment1 = document.createElement("p")
                    comment1.id = "comment_1"
                    comment1.innerText = "\n" + comment
                    comment_bar.append(comment1)
                    input4.style.display = "none"
                    button5.style.display = "none"

                    comment1.addEventListener('dblclick', function(){
                        comment_bar.removeChild(comment1)
                        button5.style.display = "none"
                })

                    
                })
                
            })
            post_material.addEventListener('mouseover', function(){
                post_material.style.textDecoration = 'line through'
            })

            post_material.addEventListener('dblclick', function(){
                post_que.removeChild(post_material)
                button4.style.display = "none"
            })
        })

        
    })