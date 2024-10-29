class Dayframe {
    constructor() {
        this.days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
    }

    getCurrentDay = () => {
        const dayIndex = new Date().getDay();
        return this.days[dayIndex];
    };

    getCurrentMonth = () => {
        const monthIndex = new Date().getMonth();
        return this.months[monthIndex];
    };

    getFormattedDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = this.formatNumber(now.getMonth() + 1);
        const day = this.formatNumber(now.getDate());
        const hours = this.formatNumber(now.getHours());
        const minutes = this.formatNumber(now.getMinutes());
        const seconds = this.formatNumber(now.getSeconds());

        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    };

    formatNumber = (num) => {
        return num < 10 ? '0' + num : num;
    };

    getYesterday = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return this.formatDate(yesterday);
    };

    getTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return this.formatDate(tomorrow);
    };

    formatDate = (date) => {
        const year = date.getFullYear();
        const month = this.formatNumber(date.getMonth() + 1);
        const day = this.formatNumber(date.getDate());

        return `${year}/${month}/${day}`;
    };

    formatTime = (date) => {
        const hours = this.formatNumber(date.getHours());
        const minutes = this.formatNumber(date.getMinutes());
        const seconds = this.formatNumber(date.getSeconds());

        return `${hours}:${minutes}:${seconds}`;
    };
}

export default Dayframe;
