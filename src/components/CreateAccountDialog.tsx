import { Dialog, Box, Typography, TextField, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getIn, useFormik } from 'formik';
import userTypeDictionary from 'content/userTypeDictionary';
import { TUserType } from 'types';
import { userSchema } from 'schemas';

type TCreateAccountDialogProps = {
  open: boolean;
  onClose: () => void;
  userType: TUserType;
};

const CreateAccountDialog = ({
  open,
  onClose,
  userType,
}: TCreateAccountDialogProps) => {
  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    touched,
    errors,
  } = useFormik({
    validationSchema: userSchema,
    initialValues: userSchema.getDefault(),
    onSubmit: (val) => {
      console.log(val);
    },
  });
  const { t } = useTranslation();

  const getErrorByKey = (key: string) => {
    const touch = getIn(touched, key);
    if (!touch) return '';
    const err = getIn(errors, key);
    if (!err) return '';
    return t(err) as string;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box p={4}>
        <Typography variant="h4" textAlign="center">
          {t(userTypeDictionary[userType].presentationText)}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={6}>
              <TextField
                {...getFieldProps('first_name')}
                error={!!getErrorByKey('first_name')}
                variant="standard"
                label={t('firstName')}
                helperText={getErrorByKey('first_name')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...getFieldProps('last_name')}
                error={!!getErrorByKey('last_name')}
                variant="standard"
                label={t('lastName')}
                helperText={getErrorByKey('last_name')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} />
          </Grid>
        </form>
      </Box>
    </Dialog>
  );
};

export default CreateAccountDialog;
