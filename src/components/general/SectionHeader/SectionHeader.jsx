import { View } from 'react-native';
import { themeStyle } from 'styles';
import { Headline } from '../Typography/Typography';

export const SectionHeader = ({ title }) => {
    return (
        <View>
            <Headline style={themeStyle.sectionTitle}>{title}</Headline>
        </View>
    );
};
