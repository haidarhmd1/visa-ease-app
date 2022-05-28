import { View } from 'react-native';
import { themeStyle } from 'styles';
import { SubHeadline } from '../Typography/Typography';

export const SubSectionHeader = ({ title }) => {
    return (
        <View>
            <SubHeadline style={themeStyle.sectionTitle}>{title}</SubHeadline>
        </View>
    );
};
