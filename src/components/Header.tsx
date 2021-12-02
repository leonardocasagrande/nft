import { AppBar, Button, styled, Toolbar, Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  marginBottom: theme.spacing(2),
}));

const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledAppBar color="transparent" elevation={0} position="static">
      <Toolbar>
        <Box gap={2} width="100%" display="flex" justifyContent="flex-end">
          <Button>{t('login')}</Button>
          <Button variant="contained">{t('signUp')}</Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
