var firebaseConfig = {
                apiKey: "AIzaSyAFW6bsQ6OcMFhH2mFLUG1hxEKFd8aGMNw",
                authDomain: "documentmanagementsystem-80e75.firebaseapp.com",
                databaseURL: "https://documentmanagementsystem-80e75.firebaseio.com",
                projectId: "documentmanagementsystem-80e75",
                storageBucket: "documentmanagementsystem-80e75.appspot.com",
                messagingSenderId: "554927148626",
                appId: "1:554927148626:web:fbf1f34e9953d8998f198b",
                measurementId: "G-FYXL9RHX2S"
            };
                
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();

            let form = document.querySelector('form');
            form.addEventListener('submit', function(event) {
            event.preventDefault()});

            function fileUpload(){
               
            // Create a Storage Reference
            var storageRef = firebase.storage().ref();
            // Get the file from DOM
            var file = document.getElementById("file").files[0];
            console.log(file);
            
            //dynamically set reference to the file name
            var thisRef = storageRef.child(file.name);

            //put request upload file to firebase storage
            thisRef.put(file).then(function(snapshot) {
                alert("File Uploaded")
                //  console.log('Uploaded a blob or file!');
            });

            // let timestamp = Number(new Date());
            // console.log(timestamp);
            // let storageRef = firebase.storage().ref(timestamp.toString());
            // console.log(storageRef);

            // let $ = jQuery;
            // let file_data = $('#file').prop('files')[0];

            // storageRef.put(file_data);
            // console.log(storageRef);

            }
                        