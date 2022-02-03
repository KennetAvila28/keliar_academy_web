import { SideBarMenuItem } from "../types";
import { FcAdvertising, FcElectricalThreshold, FcSettings, FcTodoList } from 'react-icons/fc'
import { GoBook } from 'react-icons/go'
import {BsArchive, BsCalendar3} from 'react-icons/bs' 
import {MdForum} from 'react-icons/md' 
import myClass from "../pages/myClass/myClass";
const Paths: Array<SideBarMenuItem> = [
  {
    id: '1',
    label: 'Mis clases',
    icon: FcElectricalThreshold,
    url: 'myclass',
    // element: myClass
  },
  {
    id: '2',
    label: 'Mis tareas',
    icon: FcTodoList,
    url: '/'
  },
  {
    id: '3',
    label: 'Mis Examenes',
    icon: GoBook,
    url: '/'
  },
  {
    id: '4',
    label: 'Clases archivadas',
    icon: BsArchive,
    url: '/'
  },
  {
    id: '5',
    label: 'Foros',
    icon: MdForum,
    url: '/'
  },
  {
    id: '6',
    label: 'Notificaciones',
    icon: FcAdvertising,
    url: '/'
  },
  {
    id: '7',
    label: 'Calendario',
    icon: BsCalendar3,
    url: '/'
  },
  {
    id: '8',
    label: 'Configuraciones',
    icon: FcSettings,
    url: '/'
  },
]

export default Paths