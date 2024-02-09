<script>
    var currentHour = new Date().getHours();
    var greetingMessage;
    if (currentHour >= 0 && currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }
    alert(greetingMessage);
</script>