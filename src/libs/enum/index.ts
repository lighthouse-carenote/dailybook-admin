export enum BorderRenderType {
    BORDER = 'border',
    BOX_SHADOW = 'boxShadow',
}

export enum ServiceType {
    VISIT_CARE = '방문요양',
    VISIT_BATH = '방문목욕',
    VISIT_NURSING = '방문간호',
    DN_PROTECTION = '주야간보호',
    SHORT_PROTECTION = '단기보호',
    NURSING_HOME_FOR_MANY = '노인요양시설',
    NURSING_HOME_FOR_LITTLE = '공동생활가정',
}

export enum ServiceTypeCode {
    VISIT_CARE = '001',
    VISIT_BATH = '002',
    VISIT_NURSING = '003',
    DN_PROTECTION = '004',
    SHORT_PROTECTION = '005',
    NURSING_HOME_FOR_MANY = '006',
    NURSING_HOME_FOR_LITTLE = '007',
    '001' = '방문요양',
    '002' = '방문목욕',
    '003' = '방문간호',
    '004' = '주야간보호',
    '005' = '단기보호',
    '006' = '노인요양시설',
    '007' = '공동생활가정',
}

export enum GenderCode {
    MAN = '001',
    WOMAN = '002',
}

export enum UserType {
    GUARDIAN = 'GUARDIAN',
    INSTITUTE = 'INSTITUTE',
}

export enum UserTypeCode {
    GUARDIAN = '001',
    INSTITUTE = '002',
}

export enum InstituteStatusCode {
    REQUESTED = '001',
    APPROVED = '002',
    REJECTED = '003',
}