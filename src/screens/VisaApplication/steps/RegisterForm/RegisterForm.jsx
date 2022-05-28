import { Headline } from 'components/general/Typography/Typography';
import { View, Button } from 'react-native';

export const RegisterForm = ({ next, step }) => {
    return (
        <View>
            <Headline>RegisterForm {step}</Headline>
            <Button onPress={() => next()} title='Next' />
        </View>
    );
};
