export default function InputError({ message, className = "" }: any) {
    return message ? (
        <p className={"text-sm text-red-600 dark:text-red-400 " + className}>
            {message}
        </p>
    ) : null;
}
