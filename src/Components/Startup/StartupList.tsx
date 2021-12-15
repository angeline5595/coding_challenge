import { Fragment, ReactElement } from "react";
import data from '../../data.json';

import ListComponent from './ListComponent'
export default function StartupList(): ReactElement {

  return <Fragment>
  {data.map((startup,id) => (
        <ListComponent key={id} datalist={startup}/>
      ))}
  </Fragment>;
}
