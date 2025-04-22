/**原始数据
 * export const parcel_data = [
  {
    id: "RD 2256 1562 42",
    logo: "https://www.cdnlogo.com/logos/d/53/dhl.svg",
    status: "Delivered",
    from: "America,USA",
    to: "Canada,Toronto",
    days: "5 Days",
    type: "Transit",
    Weight: "5kg",
    history: [
      {
        message: "Accepted by USP Express Plus",
        location: "USP Express Plus",
        date: "10th June,2023",
        time: "12:00 PM",
      },
      {
        location: "USP Express Plus",
        date: "10th June,2023",
        time: "12:00 PM",
      },
      {
        location: "America,USA",
        date: "12th June,2023",
        time: "12:00 PM",
      },
      {
        location: "Nigeria,Africa",
        date: "15th June,2023",
        time: "12:00 PM",
      },
    ],
  },
];*/

export interface IParcelData {
  id: string;
  logo: string;
  status: string;
  from: string;
  to: string;
  days: string;
  type: string;
  weight: string;
  history: IHistory[];
}

export interface IHistory {
  message?: string;
  location: string;
  date: string;
  time: string;
}

export const parcel_data: IParcelData[] = [
  {
    id: "RD 7842 1234 01",
    logo: "https://assets.dpdhl-brands.com/guides/dhl-group/guides/basics/logo/dhl-group-logo-guide-opener.png",
    status: "In Transit",
    from: "Germany,Berlin",
    to: "France,Paris",
    days: "3 Days",
    type: "Transit",
    weight: "2kg",
    history: [
      {
        message: "Package scanned in Berlin Center",
        location: "Berlin Center",
        date: "2nd April,2023",
        time: "09:00 AM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Germany,Berlin",
        date: "3rd April,2023",
        time: "01:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "France,Lille",
        date: "4th April,2023",
        time: "05:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "France,Paris",
        date: "5th April,2023",
        time: "11:00 AM",
      },
    ],
  },
  {
    id: "RD 5589 7634 22",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Ups_logo.png?20230812203117",
    status: "Delivered",
    from: "Japan,Tokyo",
    to: "Korea,Seoul",
    days: "2 Days",
    type: "Express",
    weight: "1.5kg",
    history: [
      {
        message: "Accepted by UPS Tokyo",
        location: "UPS Tokyo",
        date: "10th March,2023",
        time: "08:00 AM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Japan,Tokyo",
        date: "10th March,2023",
        time: "03:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Korea,Busan",
        date: "11th March,2023",
        time: "06:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Korea,Seoul",
        date: "12th March,2023",
        time: "09:00 AM",
      },
    ],
  },
  {
    id: "RD 3382 9912 78",
    logo: "https://t3.ftcdn.net/jpg/04/73/28/02/240_F_473280251_XA2p8lnf8I80rhfkoNbHBUz0N02Ro99E.jpg",
    status: "Out for Delivery",
    from: "India,Delhi",
    to: "India,Mumbai",
    days: "1 Day",
    type: "Domestic",
    weight: "3kg",
    history: [
      {
        message: "Package picked up in Delhi",
        location: "Delhi Center",
        date: "7th Jan,2024",
        time: "10:30 AM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "India,Delhi",
        date: "7th Jan,2024",
        time: "03:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "India,Mumbai",
        date: "8th Jan,2024",
        time: "08:00 AM",
      },
    ],
  },
  {
    id: "RD 1190 4455 98",
    logo: "https://images.seeklogo.com/logo-png/24/1/aramex-logo-png_seeklogo-249605.png",
    status: "Pending",
    from: "UAE,Dubai",
    to: "Qatar,Doha",
    days: "2 Days",
    type: "Transit",
    weight: "4kg",
    history: [
      {
        message: "Aramex received parcel",
        location: "Dubai Hub",
        date: "20th Feb,2024",
        time: "11:00 AM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "UAE,Dubai",
        date: "20th Feb,2024",
        time: "02:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Qatar,Doha",
        date: "22nd Feb,2024",
        time: "10:00 AM",
      },
    ],
  },
  {
    id: "RD 8745 6321 33",
    logo: "https://www.fedex.com/content/dam/fedex-com/logos/logo.png",
    status: "Delivered",
    from: "UK,London",
    to: "Ireland,Dublin",
    days: "2 Days",
    type: "Express",
    weight: "2.5kg",
    history: [
      {
        message: "Scanned at DHL London",
        location: "DHL London",
        date: "5th May,2024",
        time: "07:00 AM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "UK,London",
        date: "5th May,2024",
        time: "12:00 PM",
      },
      {
        message: "Package scanned in Berlin Center",
        location: "Ireland,Dublin",
        date: "6th May,2024",
        time: "04:00 PM",
      },
    ],
  },
];
