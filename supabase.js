<script>
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  try {
    // Query Supabase users table
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .limit(1);

    if(error) throw error;

    if(data.length === 0){
      alert('ناوی بەکارهێنەر نەدۆزرایەوە');
      return;
    }

    const user = data[0];

    // Simple password check (replace with hashed password later)
    if(user.password === password){
      alert('چوونە ژوور سەرکەوتوو بوو! Redirecting...');
      window.location.href = 'dashboard.html';
    }else{
      alert('وشەی نهێنی هەڵەیە!');
    }

  } catch(err){
    console.error(err);
    alert('هەڵە ڕویدا لە داواکاری Login');
  }
});
</script>
