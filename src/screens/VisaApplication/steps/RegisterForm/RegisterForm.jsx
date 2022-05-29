import React, { useState, useRef } from 'react';
import { Formik } from 'formik';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import {
    Headline,
    RegularCaption,
} from 'components/general/Typography/Typography';
import Signature from 'react-native-signature-canvas';

import { View, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { visaApplicationRegisterValidationSchema } from './RegisterForm.scheme';
import { customerinitValueForm } from './RegisterForm.helper';
import { ErrorText, StyledTextInput } from 'components/general/Form';
import { FormInputWrapper, StyledSignatureView } from './RegisterForm.styled';

export const RegisterForm = ({ next, setScrollEnabled }) => {
    const ref = useRef();
    const [selectedGender, setSelectedGender] = useState();
    const [selectedHasCruise, setSelectedHasCruise] = useState();
    const [
        selectedArrivalSameasDepartureAirport,
        setSelectedArrivalSameasDepartureAirport,
    ] = useState();
    const [
        selectedInvoiceRecipientSameAsApplicant,
        setSelectedInvoiceRecipientSameAsApplicant,
    ] = useState();
    const [selectedEntireTravelInUAE, setSelectedEntireTravelInUAE] =
        useState();

    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const [startDateModalOpen, setStartDateModalOpen] = useState(false);
    const [returnDateModalOpen, setReturnDateModalOpen] = useState(false);

    console.log('startDateModalOpen', startDateModalOpen);

    const handleSignature = (signature) => {
        // console.log(signature);
        console.log('signature');
    };

    const handleEmpty = () => {
        console.log('Empty');
    };

    const handleClear = () => {
        console.log('clear success!');
    };

    const handleEnd = () => {
        setScrollEnabled(true);
        ref.current.readSignature();
    };

    return (
        <View>
            <Headline>Visa Application Form</Headline>
            <Formik
                validationSchema={visaApplicationRegisterValidationSchema}
                initialValues={customerinitValueForm}
                onSubmit={(values) => alert(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                }) => (
                    <>
                        <FormInputWrapper>
                            <RegularCaption>Full Name</RegularCaption>
                            <StyledTextInput
                                name='fullname'
                                placeholder='Full Name'
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                value={values.fullname}
                            />
                            {errors.fullname && touched.fullname && (
                                <ErrorText>{errors.fullname}</ErrorText>
                            )}
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <RegularCaption>Gender</RegularCaption>
                            <Picker
                                selectedValue={selectedGender}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedGender(itemValue)
                                }
                            >
                                <Picker.Item label='Male' value='male' />
                                <Picker.Item label='Female' value='female' />
                                <Picker.Item label='Divers' value='divers' />
                            </Picker>
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <RegularCaption>Street</RegularCaption>
                            <StyledTextInput
                                name='street'
                                placeholder='Street'
                                onChangeText={handleChange('street')}
                                onBlur={handleBlur('street')}
                                value={values.street}
                            />
                            {errors.street && touched.street && (
                                <ErrorText>{errors.street}</ErrorText>
                            )}
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <RegularCaption>Street Number</RegularCaption>
                            <StyledTextInput
                                name='streetNr'
                                placeholder='Street Number'
                                onChangeText={handleChange('streetNr')}
                                onBlur={handleBlur('streetNr')}
                                value={values.streetNr}
                            />
                            {errors.streetNr && touched.streetNr && (
                                <ErrorText>{errors.streetNr}</ErrorText>
                            )}
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <RegularCaption>ZIP Code</RegularCaption>
                            <StyledTextInput
                                name='zipCode'
                                placeholder='ZIP Code'
                                onChangeText={handleChange('zipCode')}
                                onBlur={handleBlur('zipCode')}
                                value={values.zipCode}
                            />
                            {errors.zipCode && touched.zipCode && (
                                <ErrorText>{errors.zipCode}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>City</RegularCaption>
                            <StyledTextInput
                                name='city'
                                placeholder='City'
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                            />
                            {errors.city && touched.city && (
                                <ErrorText>{errors.city}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Country</RegularCaption>
                            <StyledTextInput
                                name='country'
                                placeholder='Country'
                                onChangeText={handleChange('country')}
                                onBlur={handleBlur('country')}
                                value={values.country}
                            />
                            {errors.country && touched.country && (
                                <ErrorText>{errors.country}</ErrorText>
                            )}
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <RegularCaption>Email</RegularCaption>
                            <StyledTextInput
                                name='email'
                                placeholder='Email Address'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType='email-address'
                            />
                            {errors.email && touched.email && (
                                <ErrorText>{errors.email}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Phone</RegularCaption>
                            <StyledTextInput
                                name='phone'
                                placeholder='Phone'
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                keyboardType='phone-pad'
                            />
                            {errors.phone && touched.phone && (
                                <ErrorText>{errors.phone}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>FAX</RegularCaption>
                            <StyledTextInput
                                name='fax'
                                placeholder='Fax'
                                onChangeText={handleChange('fax')}
                                onBlur={handleBlur('fax')}
                                value={values.fax}
                                keyboardType='phone-pad'
                            />
                            {errors.fax && touched.fax && (
                                <ErrorText>{errors.fax}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Cruise</RegularCaption>
                            <Picker
                                selectedValue={selectedHasCruise}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedHasCruise(itemValue)
                                }
                            >
                                <Picker.Item label='Yes' value='yes' />
                                <Picker.Item label='No' value='no' />
                            </Picker>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Citizenship</RegularCaption>
                            <StyledTextInput
                                name='citizenship'
                                placeholder='Citizenship'
                                onChangeText={handleChange('citizenShip')}
                                onBlur={handleBlur('citizenShip')}
                                value={values.citizenShip}
                            />
                            {errors.citizenShip && touched.citizenShip && (
                                <ErrorText>{errors.citizenShip}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Residence Permit</RegularCaption>
                            <StyledTextInput
                                name='residencePermit'
                                placeholder='Residence Permit'
                                onChangeText={handleChange('residencePermit')}
                                onBlur={handleBlur('residencePermit')}
                                value={values.residencePermit}
                            />
                            {errors.residencePermit &&
                                touched.residencePermit && (
                                    <ErrorText>
                                        {errors.residencePermit}
                                    </ErrorText>
                                )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Occupation</RegularCaption>
                            <StyledTextInput
                                name='occupation'
                                placeholder='Occupation'
                                onChangeText={handleChange('occupation')}
                                onBlur={handleBlur('occupation')}
                                value={values.occupation}
                            />
                            {errors.occupation && touched.occupation && (
                                <ErrorText>{errors.occupation}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Destination Country</RegularCaption>
                            <StyledTextInput
                                name='destinationCountry'
                                placeholder='Destination Country'
                                onChangeText={handleChange(
                                    'destinationCountry',
                                )}
                                onBlur={handleBlur('destinationCountry')}
                                value={values.destinationCountry}
                            />
                            {errors.destinationCountry &&
                                touched.destinationCountry && (
                                    <ErrorText>
                                        {errors.destinationCountry}
                                    </ErrorText>
                                )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Kind of Visa</RegularCaption>
                            <StyledTextInput
                                name='kindOfVisa'
                                placeholder='Kind Of Visa'
                                onChangeText={handleChange('kindOfVisa')}
                                onBlur={handleBlur('kindOfVisa')}
                                value={values.kindOfVisa}
                            />
                            {errors.kindOfVisa && touched.kindOfVisa && (
                                <ErrorText>{errors.kindOfVisa}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Travel start date</RegularCaption>
                            <DatePicker
                                date={startDate}
                                onDateChange={setStartDate}
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Return Flight Date</RegularCaption>
                            <DatePicker
                                date={returnDate}
                                onDateChange={setReturnDate}
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>
                                Arrival airport is the same as departure
                                airport?
                            </RegularCaption>
                            <Picker
                                selectedValue={
                                    selectedArrivalSameasDepartureAirport
                                }
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedArrivalSameasDepartureAirport(
                                        itemValue,
                                    )
                                }
                            >
                                <Picker.Item label='Yes' value='yes' />
                                <Picker.Item label='No' value='no' />
                            </Picker>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>
                                Invoice Recipient is same as Aplicant?
                            </RegularCaption>
                            <Picker
                                selectedValue={
                                    selectedInvoiceRecipientSameAsApplicant
                                }
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedInvoiceRecipientSameAsApplicant(
                                        itemValue,
                                    )
                                }
                            >
                                <Picker.Item label='Yes' value='yes' />
                                <Picker.Item label='No' value='no' />
                            </Picker>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>
                                Will you spend the entire travel period
                                exclusively in the United Arab Emirates?
                            </RegularCaption>
                            <Picker
                                selectedValue={selectedEntireTravelInUAE}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedEntireTravelInUAE(itemValue)
                                }
                            >
                                <Picker.Item label='Yes' value='yes' />
                                <Picker.Item label='No' value='no' />
                            </Picker>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Place</RegularCaption>
                            <StyledTextInput
                                name='place'
                                placeholder='Place'
                                onChangeText={handleChange('place')}
                                onBlur={handleBlur('place')}
                                value={values.place}
                            />
                            {errors.place && touched.place && (
                                <ErrorText>{errors.place}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Date</RegularCaption>
                            <StyledTextInput
                                name='date'
                                placeholder='Date'
                                onChangeText={handleChange('date')}
                                onBlur={handleBlur('date')}
                            />
                            {errors.date && touched.date && (
                                <ErrorText>{errors.date}</ErrorText>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <RegularCaption>Signature</RegularCaption>
                            <StyledSignatureView>
                                <Signature
                                    ref={ref}
                                    onEnd={handleEnd}
                                    onOK={handleSignature}
                                    onEmpty={handleEmpty}
                                    onClear={handleClear}
                                    onBegin={() => setScrollEnabled(false)}
                                />
                            </StyledSignatureView>
                        </FormInputWrapper>
                        <Button
                            onPress={handleSubmit}
                            title='Next'
                            disabled={!isValid}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
};
