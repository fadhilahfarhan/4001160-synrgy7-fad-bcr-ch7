import { IOurServiceListProps } from "../../interfaces/IComponentProps";

const iconOurService = {
  color: '#CFD4ED',
  image: require('../../assets/icons/check.svg'),
  alt: 'check-icon',
  size: 'small'
}

export const serviceList: IOurServiceListProps[] = [
  {
    key: 'ourService1',
    icons: iconOurService,
    text: 'Sewa Mobil Dengan Supir di Bali 12 Jam'
  },
  {
    key: 'ourService12',
    icons: iconOurService,
    text: 'Sewa Mobil Lepas Kunci di Bali 24 Jam'
  },
  {
    key: 'ourService13',
    icons: iconOurService,
    text: 'Sewa Mobil Jangka Panjang Bulanan'
  },
  {
    key: 'ourService14',
    icons: iconOurService,
    text: 'Gratis Antar - Jemput Mobil di Bandara'
  },
  {
    key: 'ourService15',
    icons: iconOurService,
    text: 'Layanan Airport Transfer / Drop In Out'
  },
];