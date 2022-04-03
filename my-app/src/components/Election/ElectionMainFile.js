import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';


  
export default function ElectionPage() {
    const navigate = useNavigate();


    const handleClickOfNews= e => {
          e.preventDefault();
      //  alert('hello in handle click of news')
      navigate('/electionDetailed');

         // do something here
        }
        const handleClickOfRanking= e => {
              e.preventDefault();
          //  alert('hello in handle click of news')
          navigate('/rankingList');
    
             // do something here
            }
        
  return (
    <Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card onClick={handleClickOfNews}>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="https://www.usnews.com/dims4/USNEWS/e942e51/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F8f%2F0a%2Fce6457d54c9cae0c543553513426%2F211103electionsboston-editorial.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ELECTION
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Michelle Wu’s Win in Boston Caps a Night of Historic Firsts
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
    
   
    <Grid item xs={6} md={4}>
    <Card style={{border:'black'}} sx={{ minWidth: 200 }}>
      <CardContent>
      <CardMedia
          component="img"
          height="auto"
          style={{width:"28%",display:'block',marginLeft:'auto',marginRight:'auto'}}
          image="https://www.usnews.com/static-atlas/assets/img/news/best-countries/logos/best-countries.svg"
          alt="green iguana"
        />
      <br></br>
        <Typography style={{textAlign:'center'}}sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <b style={{fontSize:'20px'}}>Latest News</b>
        </Typography>
      
        <Divider />
        <Typography style={{lineHeight:'35px'}}variant="h5" component="div">
        <Divider />
 
        
        </Typography>

        <Typography style={{lineHeight:'37px'}}variant="h10" component="div">
             <StarIcon style={{fontSize:'medium'}}/>   Trump Appears to Rule Out Run With Pence in ‘24
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'37px'}}variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     Wide-Open Primaries Muddle Senate Outlook
        </Typography>

        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     Clinton Says No to 2024 Presidential Bid
        </Typography>

        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     Shorter GOP Bench Hampers Senate Takeover Bid
        </Typography>

        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>   Texas Primaries Test GOP Strength
        </Typography>

        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>   DeSantis Emerging as Heir to Trump
        </Typography>
        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>   Abortion on the Ballot
        </Typography>
        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>   Democrats Brace for Fall
        </Typography>
        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>  Vaccination Rates Vary by 2020 Election Results
        </Typography>
        <Typography style={{lineHeight:'37px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>   Outlook Mixed for Dems in States
        </Typography>
       
      
      </CardContent>


      
     
    </Card>
   
    </Grid>
    
   <Grid item xs={12} md={12}>
   <h3 style={{fontWeight:'900'}}>THE ADMINISTRATION</h3>
   </Grid>


    <Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Joe Biden
        </Typography>
       
      </CardContent>
    
    </Card>
    </Grid>
    <Grid item sm={6} md={4}>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVFRUYGBgYGBgYGBgZGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJSs0NDY0NDQ0NDE0MTE0NDQ0MTQ0NDQ0NDE0NDQ0NDQxNDE0NDE0NDQ0NDQ0NDQ/NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAwQFBgcBAAj/xAA/EAACAQIDBQUGBAQGAQUAAAABAgADEQQSIQUGMUFRImFxgZEHEzKhscEjUtHwcpKi4RRCYoLC8bIVFyRTc//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAmEQACAgEEAgIDAAMAAAAAAAAAAQIRAwQSITFBUQUTImGBMnGR/9oADAMBAAIRAxEAPwDTMMIGPGhiuGE5jl0Mu8iFLcfiGKlZyqv4hiuWRisALO5YeWFlgIIVjlUnoJj28WJ95Xc8hpNU3hxHu6LHuMxt2zMWPMk+sKCizbjY2suIREY5Se0OQHdNuGLRbKzDMRwmB7vbTGFcva5tYQ8Xt6vVq+9zkEfCAdAOktqxbJz2loxrq2YlSDYX0BlRSnJDG498QQXN7RKnSJ4CWxQj5fAiEilDDPUYKilieQF5L4HY71OOgmh7i7Kp0ybqC1+MqlngntTtmpaHNseSSpFa3f8AZ9Uq2at2F/KOPmZpmxt3aGGUBEA77a+sllS3CKKJXKbZWopBItpXN7cHmTMBqv0lmWN8fhxURlPMGUzVpo06bL9eSMjIMWtpX8UozDxEtG06WRmU8iRK1jcSlM8pghF2ej1WojGHfZomy8StOkCzBQAOJA+pjbFb2Yan/mZz/pW49ZlWJ2rnPX5xuxrMeyh14WBm3e6PMuCbbNNO/VDmr92lvvPDfyh+R/VZmwwWJYao3z+YjStg6i9pgRY8LGDe/ZHjXo2LC734ZyAWK+I09ZP4aurgFWBB4Ec5guExIJtz/fCT2zdt1cNqjdk8je1/CFZKfIrxKuDbaIhVJl+G9oFZT2lRh4WMuewN56WMsoOV7fAef8J5yxST6EUGnyWPDpHarE6KRwBCwAEQGEWIgkSEEGESKxyyxNljIggwiJEcMsTYQgE1EVUTiiKKJCBgaRhixJIDSR+KEiAPsOJ7FjQw6AnsUukXyMU3EL+IYqFncSvbhAQsDByztoVp5tIAFI9oGOyoEHFtJnKiWTfbFe8r5QfhkRgcI9RgqKWPQC8eKC+hBUjvB4N6hsiFj3CXrd72eO9mrnKPyj7maTsrd6jh1CogHlHclEVRbMQo7GcGzi3dJrBbNAtpLlvbs8K6uBx0kTQpTnZ883Jxukeo0OlwRxqaVt+z1CiFEkthYjJWA/NpGr6RulTK6t0IMzRlUkzbkh9mOUfaNRQ3F4aiNsBUzop7o7E6R5CUdraPCdY2BvPCVzfjbgweHJBGdzlQfU252H1EAEZzvttRfeuqcbm55Dv8ZU9m7HfGuQLhAbO51JP5R3/SJ1y9V1RTd3YAHjqeflqZq27+ykw1JEUcBqeZPEk995mnJR6Nkd03+T6InZ26tKmoAQd5tcnzknS2LTU3y8PlJrJOMsocpMuSS6I98Gv5RIHbWyUqA6cjY8JanWR2LS4iJuLHaTVGObQwbU305H0jjDtmHlLLvBs/QkDXWVSmuRvH685ri9yMco7WFl4qfD9DFMFjGpsrqSrKRqOR6iHiktlbyP2/fdGrixvbjxkTA0b5uVt9cbRubCollcePwuB0Nj5gyyiYJubtk4PEK9+wew46o3E25kcf9s3tGDAEG4IBB6g8DL4ytFEo0zxgkQzOGMIJEQSIqRAIhIIsIkwjhhEiIxBMCGongIayADtpI/EiSPKMMUNZEQf0BPYgaQqM7iBpF8hKjjB+JCtDxy9uetCySQFo02nW93TZu6PpB7zv+Hl6xZSUVbGxY3kmoR7ZQtibEbH4hixIUtcnnblNk2FuzQwqgIgv15+sou6LinWUDgRaatTNwIMeXfGzVq9L9Eku+A1QCFadnBCZSF3mwuemT01lMprNIxVPOhHdM/rUsjsvQmZNRHlM7vxmW4OHoQraRnUaPK7Rky3mVnYj0XndLFZ6YB5aSxyhbpYvJUKddZfFM6GKW6KZ5jX4tmZ/vkKYh7Utr+9xJQHs0wEHibFz6m3+2azvNtUYTDvU0vayjqx4T5x2rijUcuTcsWYnqTf7wyfgywXktHs+wHvar1SNKYCr/E/E+Sges1FEsJR9xMHWp4UOioM7M96hYX4KoAXuX5ywYbaGJRwKtNChNsyXI8evrM0ouTNUWoonbQWWLJXVuHKMNqbTFNLomdvG32MXb+xt/wCg3jSukjsNtLE1DphhbrnCW/mjrEYsr8aFP9Vwy+GYcPO0SUWhoyTIDbFO9x3SjbVolTfleXraFQFmEpm27sCRHxMryrgSw595RseIB9VP/frGI1X5/Y/OONkv2D3n5lSIgnMdGYeuv2EtfZT4F8O+o79D4/v6zcvZ5tP3+EVWN3pHIethqh/lIHkZhNtD5H9ftNF9le0cldqZOlRQf9y8PqfWWQfIklwa1OETs9LioEiBFDBIkFEmETYRZoBEKIABOgQrTwEJDoGkZ4gR9yjPEiREY8pQqw0nKQh1eEXyMVXHjtwbRbaI7cShBPwctKnvJWzOF85aqr2UmUTH1M7se+0z6mVRo6nxGLdlcvRzZ9TJURujD6zYMA+ZFPdMbWanutiM9FT3SvSy7Rs+Yx3FT/hNzoE9adE1nAPWlM3lw+V8w/zfWXSQe82GzU83NdZVlW6LNugybMyvzwUmoI1qNaOahjKpOcepiONmVclRG7x85qWFfMoPdMnQTR93cTnpL1AmvTS7Rx/l8VpTX+ihe1/algtIctflYfM/KZBV4AdwHrLzv+71sTV0GVAXY34L7wotupJANhKSaJqOiL8TsqqP4jb7y6XZx48It9TeHE5ESgAiU6VIMxH5lUD1N5K7F2xiCuaoQyh8mcEFSeQJGgPfwPWT/wD6LSFhkBACjhxygAX9B6R4mx145FVeNgun95SpRa6Ltsk+x1s1yyFj0+0hcdjcmY8bAkm9gNbak8BLKqBEAAA7gNJBLhVeqQQCGBuD16/KUp/kXOP4lOxm8GLRlZQqoy51D2UutytwCb2uDbmbXtHOB3rZz7uuhRnW4vqjKRxB5iWfE7ERvjpq9tAeBtxkbX2GrFbrYL8OpNu4a6CWylGiqMZX2RuJNxcG4HZ8uIH0kTjKVxaWn/BBVsOvGQe0lAuJXF8lslwVpF92bd4/fzjdG7TjpZvTj9J3E1LOBA2c2Z36EW+Zl5mY4y6MO4j0v/aTu5uL93iKTf6luTpYX1PpeQiacfD7H6Qtn1jTqfwkEeRjR4dis+mEa4B6idkdsLE+8oU3/Mit6jX5g+skZcUHjBhTloSCbCBaKtBtIKCRPAQjOAQ2QLlGWJEfRniJERjunDqcIKQqnCDyMVvaQ7cbx3tIdqNDCCXgYbXq5EJ7pSBLlvCn4RPdKeJh1L/Kj0nxEEsTfthLLxuLitGTob+spKCTu6+I93WXo2krxPbNGzXY9+Br+/8ADUBPCChuIU6J5E7EMZSzqR3ReeMAYva7MwxlIozL0JjBxeWPerD5KmYcG+oleyzmTjtk0ev009+NS9nkEte6WJy5kPLUSsIJI7KrZHHK+kbDLbJMTWY/sxOJn2/TgV6ig8kQ+CDX+okyN3Lp+9x9HmFLN/KjEfO0V3wre8xNVhwBPlyim4JyYum54MXUeaMB87TW+U2eZSqSRs9GgNOZilcACxOvTpEadTpG20MKalrOykccrEH9+MzpKjS+xfGPYDUa98jMMhRwX4Nz6HkI22pszEuAEq5RxzADNboAQReI4TYlRVytWZyzAsztmI7lAAAGkDj5GT8FsdDxvcGMMSsdh8qgDhI/GV7SSBAjMabAypbVfQmTu0MVoZXcShZdecSI8uinVXJYk9bX9f7Qtlsc6r1YD5yaxOERaTltOSnnmOoAkVsmgffIOpv6AzVGVoxyVMe5dT4keh/QiIXIe/71H6iOHOr/AMZI8Doft6RI/ED1Uad/H7mFCs3P2e4r3mDpnmjOh+TD6iWqZ57Jq+ahVTmrI48Stv8AgPWaGDLl0Uy7PTxnp4xgAmDCInrSEBtPWhTkgp2M8RHto0xIhQWOqcJ+EGnDfhFYSA2ivajACSe0BrGOGS7RwMa7w4f/AOOfCUG01TauHz0mHcZl7LY26aTDql+SZ6T4iV4nH0zyCOsLUysrDkQY3SLU1mSzqtWqZrWzaudFbqBHUr+6OJz0gp4rpLBOpF7kmeN1GP68ko+mdngJ6FGKSt72YXNTzD/KbykETT9p0c6MvUTNqtPKSDyJExamPKZ6L4rLeNxfgSWK5rC/TWDaeqjsN/CfpKEdHJ/izN9r/FVb8zce+5J+sld2aKirhwdTnX5A2PqLxltel10uT8mMmt09pYfC4lGxAGT3eUE8FYjUnpoWF+V5tV1SPKz4lZpFE21MTxOPWmbHUnUKBc2+0HAY2nWQtTYMhJysDcWuRx8pH4nZpVy92cNxGa3DhYi3pM6XNM0RdjurttMoFmueVuFuJvwnE2jTbgwv0Oh9DI6rhUvezkgcC4Hl8UZ1NkGqLfCL6WZmPjc8I0khqSLI+IJWMMepyBjpcRbAYL3K2Z3fTQMcx8bxjtzGD4BysPSJIkXyQmITXqf3pE8SgC/vyhI9yW8ow2ttBUF2NhcA24i5sSPAXPlAk2wtpKzn+CR0XMA17sBfTMdBGibPZGpuwCsMwI6gg8B4S14jaeDTBG4CuFZQoIASw7IVfGULY2OqYiszuxYhRbkovyA5TRCL7Mspp8UDm7VTvcgesSraFf3x/wC4u/xHve/0vEKw1Xzv6GOhDTPY9U7ddeqI3oxv9ZqSC2kyL2NH8ap/+X/NZrxlkeiqfZ6enp4xhThnJ6evCQ9PT15y8hAhGuIjq8a1hIhRzThvwgU4b8IGMQ+PHGN9npreO8eOMDAJpHRH2O6lO6kd0yva2H93Vde+/rNaA0me74YXLVDdR9Jl1MbjZ1/iMm3K4+0V5BF0MSQRZBMB6Nll3RxWWoV/ML+kvgmW7Oq5KiN0I9DpNPw75lB7pu08rjXo838ti25FJeUKCFBEKaDkgutxM923h8lZuh1miSl771FplG4s1wB1AFyT0A698pzK4nR+Oy7MtPpor5noglQnUi0WzgcTMB6JtUUTeVvxlTyPmf7yG2zU1I7j87AfQx9jq/vcS7jgGNvAf9D1kNj3u3XXX7ff1myHg8tl7bXsvXsu2h2Hok/AwcfwtofRh/VNORA41mEbs4pqGKpFRcOwpsL2urkDj3Gx8ptGDxdjlbRhxB5j7xMkfysfG/xr0PW2eh5CeNJUGgnP8Youb+UidrbXVFNz4CK0qHXYG08etMEjjylfqCyZjcu/aN+Op+UaVcUXbM3j4c7GJY/aIK5V1PMxEhrEcXixTUC8g8VTaqpZtFHCSuDwJqku3wjUn9Ilt9slNgthZbADv4mNDl8Am+OSlsxa4uSt9ASbDyk3sBwgY6a3Hop/WRj0wtMW4mL4F8g/fPSam+DIlyPw9215DXxJufpAd7o3UGw87XiVJjqeZJ+thBo3bs66m5HXW4ERDNGrexnC2Wq55BUHnqf/ABE1GVP2eYIUsKgtqyB28Sz/AGEtZMvSpIok7Z2CTPEwYwDhM5eeMGQh3NPZoJnJBRUNG9ZopfSNqjQohIJDbhE0ijcIrGIzGiewQ0ncbwhYEdmP4IOhKvvphcyZ/wApvLUBGG2sP7yky9xlU1ui0aNLk+vLF/sy1VjlEiYSxt00i6ics9hZ0LNE3fxGekp7tfKZ5eWrc7E/Eh5G485o08qlXs5nymPdi3ei3z09PTceaAeoF4kCZ5vlWD4xUbh7tMnm75v6lT5Sxpjy9SuB8VNeyOfxOtv6P6pWt/MLTqYQYlT2qZBv1uwVlI5EHXuIglG4tFuKeyakQr4lFNr3+g84x2pjQ65E4nXMbgaa5VPMnhI3A7wKq5SAPQMSefT98o02nt5KilFW7XuXJGluFrTAsbT6O3LWxlDl/wAohcTmpF8ylSeCnQ2vpp4yLUFtebH9/eKYysajcz39bRakljpxtbwmqKpHHm03x0PNlAf4rDDpUpk/zi3775tO1dmiqoOoNtCOKn7iYxu8l8Xh1H/2KT32uftN8wx0tK8i5SGxvhsog2Pib2DggdWYSMq4HEtdhTZhcjOdQbceM0KohUmwvxt+lvGGlJlUKBwGp0GvMytKy3czM8Tg3yjhmJ/YiuE2OW1fh48ZedoYIuFFhowueNgedou2EpU1+G57zrJQbRVKlGy5FFltbh9JR9tuwZgeR18D+/nNK2loC1soAvpx4dJl9WualZyWAGou3C17awwXIk3wRJa409J6x48LQawUMcpBsSLi9jrxHdE2c+M0bTPY+SqTa3EcftLJuZsdsRXVVW9rMel76X7uvdKzgqZYqObHnpxPMzftx93xgqWZrGq/E93ID6nx7oYxthcqRZNnYYUkVF4KqrfrlGpjkmCNBAdrGWlIZnJxHuLzpkIcMEzs4ZCHJydMGQUKMa51j4HSR+I4wkJWnFGiVMxUxWMR+O4RTBDsiIY4xzhB2RG8EHECqlwRDnoCJmYbWo5Kzr33HnEAZP74YbK6v10lfE5mWNSaPYaXJ9mGL/R2SewcR7usp5HQyLLAC50A1Mqe2d52By0SVF7Bh8THu/KIcUZOSa8FWtzY8eNqXnwfQyG4vAxBYI2X4spy+NtPnPnHZe28TQfOmJqBzx7bFfDI1wfMQ8fvHia3x4io1+Rdgv8AKDadC0eWo0TbmISnUGKw1VBUKEYikzoubJlBuCdH7u71qO8G3qNZGyVHTPo9E3CnvOmXwYG+nDnKdVxbKbqTfmYhUxTt8Q+n6QOTYUkJVjroxh4aiX0UE9/I+fSdelcXB8oeHxzKLLpy0GvrEfIx16Ip6DVzxNuHhOk5R+9Z4DmYDDOwThmNr9O+HrkD5JzcDCe9xqHlTBe/eQVA/qv5Tbqa2meezvCZWd8oGiqMosCBoD5hQfOaMF4TPN3KzRCNKhLIc14oyExWpBseEWhhFMPYEkxpU7bWEf4t7Cw4xPCYbKCzSPukTpWys721MlNgOJFvtKRWwOHp4ao7oTW0CX+Gx0Nx1ufke6aFj6qmoCUFRV4rYldeGY8B18pnW+e1XYLhxlCI5qHKBfMwsFLW1AX5mW4uyrL0Up1gq5EXZYISXlApSDMdJvfs/wB4jisMofV6Vka3Ei1kcjvGl+oMwikcp/fyknhNtPSOZHZG4ZlYgwRbTGdNH0i1e31tz8bSNx21lDoiEO7fCo5Cxu7H/Ko6nwGsybZG8r1Wy1MXWXMQCt0TNc2t7w8B33Fuk1Hd7Y9KigdcpYi5YEtmJ1JLnVul46diNUTWGWygXvbn16n1il4IaFCA8ZwmcM8ZCHDBnSYJMIoY4RjiI+HCMMRxkRCSpmLnhGyGODwisKIzGnWPMN8IkfjmkhhvhEZ9BFp0QRCEBCC3qwuekTzXX0lGmoY2nnRgeYMzOvTyMy9CRMWpjypHoPictwcfRWd7MdkRaYOr6t/CDoPM/SUtWu1+mn6yW3jxGeu55Kcg7suh+d5EYfh85djjUUczWZnkzN+Ol/BfPALzhM7HMwlbW857q8UZYWaQAkKYHKGqWhCEshKBbhJTc4OMRnVVbKp0YXGumtwRzv5SGxL2Bll3Q2hh6GGq1XV2qg2BB0AsbC3PW0WSbjwNFpS5NN2JRNOklkVbXzMo7Tm/xN++Uns1rA27QBFteIuPCUDD+0ShTpqDRqkgAG2T5dqD/wC4OFvmFCuDrzQDv0Dypwfou3K+zQHXtAiKBh5TOH9pNKxC0aw0/Oo+5jGv7SNLDDL4vUZvUBfvBsl6DuXs0vFV0DDUOTayrxB1OvTgYLs5BJIUWIIF+HeRaZJV39xlQ2T3aM1guRAWF9AMzkj6RPG73Yqlnoiu7sbrWdtRe3wU10Chddbak8wBD9bv0LvVey1bT3so0EqUkqZi5JbLqWbW4uBYAnvEzHEVS5JJuSSf7ROnw7uAE4xlsY7VRTKW5gET1oUGMANDyPkekC2p1HGdWCeMhBVWtJLZu2a+HP4VV0F+APZPivA+kiQZ0NIA1fd32n2smLQkcPeIBp3sn3HpNF2Ztahilz0KiOOeU6r3Mp1U+InzKGjvBbQqUWFSm7Iw4MpsR+o7o6YGj6bJnCZlW7ntROiYtM3L3qCx8XTgfFbeEumwd78NjWZKRYMt+y6kXANrgi4trz1hAT5MAmevOXhFFVOkY4jjHYOkaVjCQ//Z"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kamala Harris
        </Typography>
      
      </CardContent>
     
    </Card>
   
    </Grid>
    <Grid item  sm={6} md={4}>
  
    </Grid>
  </Grid>
    
    
  );
}
