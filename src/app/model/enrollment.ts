export interface Enrollment {
    enrolid : string,
    courseid: number,
    sudentid : string | undefined,
    enroldate : Date,
    status : string,
    statusdate : Date,
    studentcomments : string,
    admincomments : string,
}
