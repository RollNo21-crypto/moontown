import type { OccasionOption } from '../types/occasion';

export const occasions: OccasionOption[] = [
  {
    type: 'BIRTHDAY',
    label: 'Birthday',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    fields: [
      { key: 'birthdayPerson', label: 'Name of Birthday Person', required: true },
      { key: 'age', label: 'Age', required: false }
    ]
  },
  {
    type: 'ANNIVERSARY',
    label: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    fields: [
      { key: 'person1', label: 'Your Name', required: true },
      { key: 'person2', label: "Partner's Name", required: true },
      { key: 'years', label: 'Years Together', required: false }
    ]
  },
  {
    type: 'ROMANTIC_DATE',
    label: 'Romantic Date',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80',
    fields: [
      { key: 'person1', label: 'Your Name', required: true },
      { key: 'person2', label: "Partner's Name", required: true }
    ]
  },
  {
    type: 'MARRIAGE_PROPOSAL',
    label: 'Marriage Proposal',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    fields: [
      { key: 'proposer', label: 'Your Name', required: true },
      { key: 'partner', label: "Partner's Name", required: true }
    ]
  },
  {
    type: 'BRIDE_TO_BE',
    label: 'Bride to Be',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    fields: [
      { key: 'brideName', label: "Bride's Name", required: true },
      { key: 'eventDate', label: 'Wedding Date', required: false }
    ]
  },
  {
    type: 'GROOM_TO_BE',
    label: 'Groom to Be',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
    fields: [
      { key: 'groomName', label: "Groom's Name", required: true },
      { key: 'eventDate', label: 'Wedding Date', required: false }
    ]
  },
  {
    type: 'FAREWELL',
    label: 'Farewell',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80',
    fields: [
      { key: 'personName', label: 'Name of Person', required: true },
      { key: 'occasion', label: 'Farewell Occasion', required: true }
    ]
  },
  {
    type: 'VICTORY',
    label: 'Victory Celebration',
    image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80',
    fields: [
      { key: 'celebrant', label: 'Name of Celebrant', required: true },
      { key: 'achievement', label: 'Achievement', required: true }
    ]
  },
  {
    type: 'BABY_SHOWER',
    label: 'Baby Shower',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    fields: [
      { key: 'parentName', label: 'Parent Name', required: true },
      { key: 'dueDate', label: 'Due Date', required: false }
    ]
  }
];