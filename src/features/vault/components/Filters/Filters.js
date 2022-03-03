import React, { memo, useCallback, useEffect, useMemo } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Avatar, Box, Button } from '@material-ui/core';

import styles from './styles';
import { assets, platforms } from './constants';

const useStyles = makeStyles(styles);

const Filters = ({
  toggleFilter,
  filters,
  platform,
  vaultType,
  asset,
  order,
  setPlatform,
  setVaultType,
  setAsset,
  setOrder,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handlePlatformChange = useCallback(event => setPlatform(event.target.value), [setPlatform]);
  const handleVaultTypeChange = useCallback(
    event => setVaultType(event.target.value),
    [setVaultType]
  );
  const handleAssetChange = useCallback((_event, option) => setAsset(option.value), [setAsset]);
  const handleOrderChange = useCallback(event => setOrder(event.target.value), [setOrder]);

  const allAssetOptions = useMemo(() => {
    return [];
  }, [t]);

  const resetFilter = useCallback(() => {
    toggleFilter('resetAll');
    setPlatform('All');
    setVaultType('All');
    setAsset('All');
    setOrder('default');
  }, [toggleFilter, setPlatform, setVaultType, setAsset, setOrder]);

  useEffect(() => {
    if ((!asset || !allAssetOptions.find(option => option.value === asset)) && asset !== 'All') {
      setAsset('All');
    }
  }, [allAssetOptions, asset, setAsset]);

  useEffect(() => {
    if ((!platform || !platforms.includes(platform)) && platform !== 'All') {
      setPlatform('All');
    }
  }, [platform, setPlatform]);

  return <Grid container spacing={0} className={classes.container}></Grid>;
};

export default memo(Filters);
