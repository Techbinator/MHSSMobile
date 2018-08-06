import commonColor from '../../theme/variables/commonColor';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    backgroundColor: '#FFF',
  },
  form: {
    flex: 1,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
  },

  formItem: {
    paddingLeft: 0,
    borderColor: '#F6F6F6',
  },

  formInput: {
    paddingLeft: 15,
    height: 70,
  },

  addBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    height: 50,
  },

  cancelBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 50,
    backgroundColor: '#f4f4f4',
  },
  error: {
    text: {
      color: commonColor.brandDanger,
    },
  },

  picker: {
    input: {
      width: '100%',
      height: 80,
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#FFF',
    },
    placeholderText: {
      color: commonColor.inputColorPlaceholder,
      fontSize: commonColor.DefaultFontSize,
    },
    itemStyle: {
      backgroundColor: '#FFF',
    },
    itemTextStyle: {
      color: commonColor.dropdownLinkColor,
      paddingLeft: 40,
    },
  },

  datePicker: {
    dateInput: {
      height: 70,
      paddingLeft: 20,
      borderColor: '#F6F6F6',
      borderWidth: 1,
      borderTopColor: '#F6F6F6',
      borderTopWidth: 1,
    },
    dateTouchBody: {
      paddingBottom: 0,
    },
    dateText: {
      alignSelf: 'flex-start',
      fontSize: commonColor.DefaultFontSize,
    },
    dateIcon: {
      fontSize: 25,
      color: '#95959A',
      position: 'absolute',
      right: 15,
      bottom: 4,
    },
    placeholderText: {
      alignSelf: 'flex-start',
      color: '#95959A',
      fontSize: commonColor.DefaultFontSize,
    },
  },

  switchContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingTop: 25,
    paddingRight: 15,
  },
  switchText: {
    color: '#95959A',
    paddingTop: 5,
    paddingRight: 15,
  },
};
