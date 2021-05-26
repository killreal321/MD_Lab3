import React, { useState, useEffect } from "react";

import {Dimensions} from "react-native";

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};

export const MainTheme = {
    dark: false,
    colors: {
        primary: '#2B3B71',
        background: 'rgb(242, 242, 242)',
        card: '#CCB455',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const AppTabTheme = {
    dark: false,
    colors: {
        primary: '#CCB455',
        background: 'rgb(242, 242, 242)',
        card: '#CCB455',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
}

export const BtnTheme = {
    colors: {
        primary: '#CCB455',
        text: 'rgb(242, 242, 242)',
    },
};

export const invariables = [0, 1, 0, 1, 0, 1, 0, 1, 0];
export const labels =
    [
        '-2п', '', "", "", "", "-п", "", "", "", "", "", 0, "", "", "", "", "", 'п', "", "", "", "", '2п'
    ];

