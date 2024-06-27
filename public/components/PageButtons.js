'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PageButtons({ currentPage, firstPage, lastPage }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePage = (next) => {
        if(next && lastPage || !next && firstPage) return;
        
        const current = new URLSearchParams(searchParams);
        const nextPage = next ? currentPage + 1 : currentPage - 1;
        current.set('page', nextPage);
        const search = current.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`);
    }

    return (
        <div style={pageButtonDiv}>
            <button onClick={() => handlePage(false)} style={pageButton} disabled={firstPage}>{"<"}</button>
            <text style={curPage}>{currentPage}</text>
            <button onClick={() => handlePage(true)} style={pageButton} disabled={lastPage}>{">"}</button>
        </div>
    )
}

const pageButtonDiv ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    margin: '15px',
    marginTop: '30px',
}

const pageButton = {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAllign: 'center',
    margin: '5px',
}

const curPage = {
    margin: '5px',
}