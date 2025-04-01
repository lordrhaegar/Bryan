// Module Title: SWE6206: Emerging Technologies
// Assessment Title: Emerging Technologies based Industry Solutions
// StudentID: 2333176
import * as ImagePicker from 'expo-image-picker'

export async function pickImage(setPrediction) {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
    if (permissionResult.granted === false) { 
        alert("Permission to access media library is required!"); 
        return; 
    }
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
      allowsEditing: false,
      aspect: [4, 3],
    });
    console.log("result>>", result);
    
    if (result.canceled) {
      return;
    }
  
    let localUri = result.assets[0].uri;
    let filename = result.assets[0].fileName 
    let filer = localUri.split('/').pop();
    // let type = result.assets[0].type
    console.log(filename);
    
  
    let match = /\.(\w+)$/.exec(filer);
    let type = match ? `image/${match[1]}` : `image`;
    // console.log("match>>", match);
    console.log("type>>", type);
    
  
    let formData = new FormData();
    formData.append('file', { uri: localUri, name: filename, type });
    console.log("formdata>>", formData);
    
    const prediction = await sendImageFile(formData);
    setPrediction(prediction.result)
    
    
  }
const sendImageFile = async (formData)=>{
  try {
    const res = await fetch('https://7244-34-16-226-247.ngrok-free.app/predict', {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    if (!res.ok) { 
      const errorText = await res.text(); 
      throw new Error(`HTTP error! status: ${res.status}, response: ${errorText}`);
     }
    const resjson = await res.json()
    return resjson
  } catch (error) {
    console.error('Error:', error);
  }
  
}
  