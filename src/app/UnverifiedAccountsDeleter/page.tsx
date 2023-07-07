import { CronJob } from 'cron'
import getConnection from '@/utility/dbHandler';
const job = new CronJob(
    '* * * * *', async () => {
        const database = getConnection();
        if (database) {
            await database('users').where({ confirmation: false }).whereRaw('NOW() - created_at >= INTERVAL \'1 MINUTE\'').del();
            database.destroy();
        }
    }
)
function Page() {
    job.stop();
    return (
        <div>

        </div>
    )
}

export default Page