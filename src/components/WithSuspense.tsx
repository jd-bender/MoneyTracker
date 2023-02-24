import { FC, Suspense } from 'react';

const WithSuspense = (WrappedComponent: FC, fallback: any) => (props: any) =>
    (
        <Suspense fallback={fallback}>
            <WrappedComponent {...props} />
        </Suspense>
    );

export default WithSuspense;
