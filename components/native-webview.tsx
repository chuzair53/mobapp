//native-webview.tsx
import React, { CSSProperties } from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

interface NativeWebViewProps {
    target: string;
}

export const NativeWebView = (props: NativeWebViewProps): JSX.Element => {
    if (Platform.OS === 'web') {
        return <iframe style={{backgroundColor: 'transparent', height: 360, width: 1280}} src={props.target} style={styles} />;
    }
    return <WebView source={{ uri: props.target }} />;
};

const styles: CSSProperties = {
    height: 600,
    width: 800
};