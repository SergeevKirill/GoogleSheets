// $(function() {
// //     var scene = new THREE.Scene();
// //     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
// //     var renderer = new THREE.WebGLRenderer();
// //     renderer.setSize( window.innerWidth, window.innerHeight );
// //     document.body.appendChild( renderer.domElement );

// //     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// //     var cube = new THREE.Mesh( geometry, material );
// //     scene.add( cube );

// //     camera.position.z = 5;

// //     function animate() {
// //         requestAnimationFrame( animate );
// //         cube.rotation.x += 0.01;
// //         cube.rotation.y += 0.01;
// //         renderer.render( scene, camera );
// //     }
// //     animate();

//     let xhr = new XMLHttpRequest();
//     $('.js-request').on('click', function() {
//         $('.response-text').empty();
//         xhr.open('GET', 'i.php', false);
//         xhr.send();
//         if(xhr.readyState === 4 && xhr.status == 200) {
//             console.log('4');
//             $('.response-text').text(xhr.getAllResponseHeaders())
//         }
//         xhr.open('GET', 'i.json', false);
//         xhr.send();
//         let result = xhr.responseText;
//         if(xhr.readyState === 4 && xhr.status == 200) {
//             console.log(JSON.parse(result));
//             $('.response-text').text(JSON.parse(result).yes)
//         }

//         let name = 'NoNAME', yees = 'YEES';
//         let data = {
//             name: name,
//             yees: yees
//         }

//         $.ajax({
//             url: 'i.php',
//             dataType: 'text',
//             type: 'post',
//             contentType: 'application/x-www-form-urlencoded',
//             data: data,
//             processData: false,
//             success: function(data) {
//                 console.log(data);
//             }
//         })
//         $.post('i.php', data, function(data) {
//             $('.response-text').prepend(data)
//         }) 
//     });

//     $('#login_form').on('submit', function(e) {
//         e.preventDefault();
//         $('.result').empty();

//         $.ajax({
//             url: 'login.php',
//             dataType: 'text',
//             type: 'get',
//             success: function(data) {
//                 $('.result').append(JSON.parse(data));
//                 console.log(JSON.parse(data).name);
//             }
//         })
//     });
// });