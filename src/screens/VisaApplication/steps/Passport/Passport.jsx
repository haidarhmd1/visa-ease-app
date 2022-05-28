import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export const Passport = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState({});
    const ref = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) return <View />;
    if (hasPermission === false) return <Text>No Access to camera</Text>;

    const takePicture = async () => {
        setPhoto(await ref.current.takePictureAsync());
        console.log(photo);
    };

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                ref={ref}
            >
                <View style={styles.cameraOverlay} />
                <View style={styles.textContainer}>
                    <Text style={styles.text} onPress={takePicture}>
                        Inorder to get the best result, caputre the ID/Passport
                        inside of the frame
                    </Text>
                </View>
            </Camera>
            {/* <View style={styles.container}>
                <Image source={{ uri: photo.uri }} style={styles.imageTaken} />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraOverlay: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 250,
        marginLeft: 45,
        marginBottom: 45,
        marginRight: 45,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
    },
    textContainer: {
        flex: 1,
        padding: 25,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    imageTaken: {
        width: 450,
        height: 450,
    },
});
