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
    marginBottom: 10,
    height: 50,
    backgroundColor: '#f4f4f4',
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
      backgroundColor: '#FFF',
      color: commonColor.inputColorPlaceholder,
      fontSize: commonColor.DefaultFontSize,
    },
    itemStyle: {
      backgroundColor: '#FFF',
      paddingLeft: 20,
    },
    itemIconStyle: {
      fontSize: 30,
      color: commonColor.dropdownLinkColor,
      paddingLeft: 40,
    },
    categoryIcon: {
      alignSelf: 'center',
      fontSize: 60,
      color: commonColor.dropdownLinkColor,
    },
  },
};
