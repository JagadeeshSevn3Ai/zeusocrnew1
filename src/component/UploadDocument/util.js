export const containerName = `pdffileuploadv1`;
export const sasToken = '?sv=2021-12-02&ss=bf&srt=sco&sp=rwdlaciytfx&se=2023-12-10T23:55:11Z&st=2023-04-11T15:55:11Z&spr=https&sig=7fEw2VoDxfm97inyQosDMyakOb9QIhNS2Naw%2BEUuAIo%3D';
export const storageAccountName = 'https://documentuploadstrg.blob.core.windows.net/?sv=2021-12-02&ss=bf&srt=sco&sp=rwdlaciytfx&se=2023-12-10T23:55:11Z&st=2023-04-11T15:55:11Z&spr=https&sig=7fEw2VoDxfm97inyQosDMyakOb9QIhNS2Naw%2BEUuAIo%3D'; 

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}
