import Link from 'next/link'
//
import { styles } from '../styles/styles'

export default function Home() {
  return (
    <main className={styles.Container}>
      <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
        <div>
          <div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
              Radish Frontend Challenge
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 sm:text-center'>
              An AAVE Protocol Frontend Challenge to become a Radisher 🤘
            </p>
            <div className='mt-8 flex gap-x-4 sm:justify-center'>
              <Link
                href='/dashboard'
                className='inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700'
              >
                Get started
                <span className='text-indigo-200' aria-hidden='true'>
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
