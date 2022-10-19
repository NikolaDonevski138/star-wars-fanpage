import style from './loader-wrapper.module.scss';

export const LoaderWrapper = ({children}) => {
  return (
    <div className={style.loaderWrapperContainer}>
      {children}
    </div>
  )
}