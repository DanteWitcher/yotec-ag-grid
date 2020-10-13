import { Fields } from 'src/app/core/enums/fields.enum';
import { CellComponent } from 'src/app/modules/table/components/cell/cell.component';
import { HeaderComponent } from 'src/app/modules/table/components/header/header.component';

export const CHECKBOX = {
  headerName: '',
  field: Fields.checkbox,
  width: 40,
  autoHeight: true,
  hide: true,
  cellRendererFramework: CellComponent,
  headerComponentFramework: HeaderComponent,
};
