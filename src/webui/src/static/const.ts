const MANAGER_IP = `/api/v1/nni`;
const DOWNLOAD_IP = `/logs`;
const trialJobStatus = [
    'UNKNOWN',
    'WAITING',
    'RUNNING',
    'SUCCEEDED',
    'FAILED',
    'USER_CANCELED',
    'SYS_CANCELED',
    'EARLY_STOPPED'
];
const CONTROLTYPE = [
    'SEARCH_SPACE',
    'TRIAL_CONCURRENCY',
    'MAX_EXEC_DURATION'
];
const MONACO = {
    readOnly: true,
    automaticLayout: true
};
const DRAWEROPTION = {
    minimap: { enabled: false },
    readOnly: true,
    automaticLayout: true
};
const COLUMN_INDEX = [
    {
        name: 'Trial No.',
        index: 1
    },
    {
        name: 'ID',
        index: 2
    },
    {
        name: 'StartTime',
        index: 3
    },
    {
        name: 'EndTime',
        index: 4
    },
    {
        name: 'Duration',
        index: 5
    },
    {
        name: 'Status',
        index: 6
    },
    {
        name: 'Intermediate count',
        index: 7
    },
    {
        name: 'Default',
        index: 8
    },
    {
        name: 'Operation',
        index: 10000
    }
];
// defatult selected column
const COLUMN = ['Trial No.', 'ID', 'Duration', 'Status', 'Default', 'Operation'];
// all choice column !dictory final
const COLUMNPro = ['Trial No.', 'ID', 'StartTime', 'EndTime', 'Duration', 'Status',
'Intermediate count', 'Default', 'Operation'];
export {
    MANAGER_IP, DOWNLOAD_IP, trialJobStatus, COLUMNPro,
    CONTROLTYPE, MONACO, COLUMN, COLUMN_INDEX, DRAWEROPTION
};
