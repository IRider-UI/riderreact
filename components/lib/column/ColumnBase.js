import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

export const ColumnBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Column',
        align: null,
        alignFrozen: 'left',
        alignHeader: null,
        body: null,
        bodyClassName: null,
        bodyStyle: null,
        cellEditValidateOnClose: false,
        cellEditValidator: null,
        cellEditValidatorEvent: 'click',
        className: null,
        colSpan: null,
        columnKey: null,
        dataType: 'text',
        editor: null,
        excludeGlobalFilter: false,
        expander: false,
        exportField: null,
        exportable: true,
        field: null,
        filter: false,
        filterApply: null,
        filterClear: null,
        filterElement: null,
        filterField: null,
        filterFooter: null,
        filterFunction: null,
        filterHeader: null,
        filterHeaderClassName: null,
        filterHeaderStyle: null,
        filterMatchMode: null,
        filterMatchModeOptions: null,
        filterMaxLength: null,
        filterMenuClassName: null,
        filterMenuStyle: null,
        filterPlaceholder: null,
        filterType: 'text',
        footer: null,
        footerClassName: null,
        footerStyle: null,
        frozen: false,
        header: null,
        headerClassName: null,
        headerStyle: null,
        headerTooltip: null,
        headerTooltipOptions: null,
        hidden: false,
        maxConstraints: 2,
        onBeforeCellEditHide: null,
        onBeforeCellEditShow: null,
        onCellEditCancel: null,
        onCellEditComplete: null,
        onCellEditInit: null,
        onFilterApplyClick: null,
        onFilterClear: null,
        onFilterConstraintAdd: null,
        onFilterConstraintRemove: null,
        onFilterMatchModeChange: null,
        onFilterOperatorChange: null,
        reorderable: true,
        resizeable: true,
        rowEditor: false,
        rowReorder: false,
        rowReorderIcon: null,
        rowSpan: null,
        selectionMode: null,
        showAddButton: true,
        showApplyButton: true,
        showClearButton: true,
        showFilterMatchModes: true,
        showFilterMenu: true,
        showFilterMenuOptions: true,
        showFilterOperator: true,
        sortField: null,
        sortFunction: null,
        sortable: false,
        sortableDisabled: false,
        style: null,
        children: undefined
    },
    getCProp: (column, name) => ObjectUtils.getComponentProp(column, name, ColumnBase.defaultProps),
    getCProps: (column) => ObjectUtils.getComponentProps(column, ColumnBase.defaultProps),
    getCOtherProps: (column) => ObjectUtils.getComponentDiffProps(column, ColumnBase.defaultProps)
});
