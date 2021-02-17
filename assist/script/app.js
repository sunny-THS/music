document.querySelector('.submit_').addEventListener('click', function(e) {
  const inputFile = document.querySelector('.inputfile');
  const files = inputFile.files;
  let folder =  prompt('Xin mời nhập tên chủ đề','');
  uploadFile(files, folder==''? 'other' : folder);
  document.querySelector('.submit_').disabled = true;
  document.querySelector('form').reset();
  document.querySelector('#filename').textContent = 'Choose a file...';
});
function uploadFile(files, folder) {
  var titlePage = document.querySelector('title');
  const date = new Date(Date.now()); // get datetime now

  Array.prototype.forEach.call(files, function(file) {
    const nameFile = file.name;
    const Itemfile = file;
    const storageRef = firebase.storage().ref();
    const filesRef = storageRef.child(`music/${folder}/${nameFile}`).put(Itemfile);

    filesRef.on('state_changed', snapshot => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      titlePage.textContent = `Upload is ${progress}% done`;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          titlePage.textContent = 'Upload is paused';
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, error => {
      // Handle unsuccessful uploads
      alert(error);
    }, () => {
      // Handle successful uploads on complete
      titlePage.textContent = 'Save music';
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      // filesRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //   const setupFile = {
      //     name: file.name,
      //     type: file.type == '' ? 'application/octet-stream' : file.type,
      //     date: date.toLocaleString('en-GB'),
      //     folder: localStorage.username == '' ? 'root' : localStorage.username,
      //     url_data: downloadURL
      //   }
      //   socket.emit('ClientSendData', setupFile);
      // });
    });
  });
}
