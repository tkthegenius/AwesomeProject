getPhotos() {
  CameraRoll.getPhotos({
    first: 20,
    assetType: 'All'
    })

  .then(r => this.setState({ photos: r.edges }))
    }

    _pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4,3]
    });
  }
