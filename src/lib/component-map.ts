import { ComponentData } from './types';
import { listComponent } from './components/list';
import { featureListComponent } from './components/feature-list';
import { infiniteScrollComponent } from './components/infinite-scroll';
import { planComponent } from './components/plan';
import { cursorsComponent } from './components/cursors';
import { waveComponent } from './components/wave';
import { graphComponent } from './components/graph';
import { calendarComponent } from './components/calendar';
import { liquidballComponent } from './components/liquidball';
import { glassNavbarComponent } from './components/glass-navbar';

export const componentMap: Record<string, ComponentData> = {
  list: listComponent,
  featurelist: featureListComponent,
  infinitescroll: infiniteScrollComponent,
  plan: planComponent,
  cursors: cursorsComponent,
  wave: waveComponent,
  graph: graphComponent,
  calendar: calendarComponent,
  liquidball: liquidballComponent,
  glassnavbar: glassNavbarComponent,
}; 