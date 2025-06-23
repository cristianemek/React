type FetchError = { code: number; message: string } | null;

export interface fetchData{
        data: any;
        isLoadding: boolean;
        hasError: boolean;
        error: FetchError;
}

    