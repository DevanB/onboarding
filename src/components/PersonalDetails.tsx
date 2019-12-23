import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

interface PersonalDetailFormValues {
  email: string;
  name: string;
}
interface PersonalDetailsProps {
  nextAction: () => void;
}
export const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  nextAction
}) => {
  const { t } = useTranslation();
  const initialValues: PersonalDetailFormValues = { email: '', name: '' }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('Required')),
    email: Yup.string().email(t('inputs.email.Invalid-email')).required(t('Required'))
  });
  return (
    <>
      <Heading tag="h1" size="h1">{t('personal-details.heading')}</Heading>
      <PrimaryText>{t('personal-details.body')}</PrimaryText>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            nextAction()
          }, 400);
        }}
      >
        {({ dirty, isSubmitting, isValid, isValidating  }) => (
          <Form>
            <label>{t('inputs.name.label')}</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <label>{t('inputs.email.label')}</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <Button
              disabled={isSubmitting || isValidating || !isValid || (dirty && !isValid)} 
              filled 
              icon="arrowrightalt"
              rounded 
            >
              {t('Next')}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
